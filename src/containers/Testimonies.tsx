import React, { useState, useEffect, useCallback, useRef } from 'react';
import Option from '../components/SelectField/Option';
import Select from '../components/SelectField/Select';
import TextInput from '../components/TextInput/TextInput';
import { SearchIcon, ChevronDownIcon } from '@heroicons/react/outline';
import { ReactComponent as Spinner } from '../assets/Spinner.svg';
import {
  Table,
  TableHead,
  TableBody,
  TableContainer,
} from '../components/Table';
import Container from '../components/Container';
import { TestimonialsResponse, Testimony } from '../types/testimony';
import { Track, TracksResponse } from '../types/tracks';
import { tracksURL, testimonialsURL } from '../constants/endpoints';
import { useRequest } from '../hooks/use-request';
import Pagination from '../components/Pagination/Pagination';
import DefaultTrack from '../assets/DefaultTrack.svg';
import SingleTestimony from './Testimony';
import Alert from '../components/Alert';

const Testimonies = () => {
  const [track, setTrack] = useState<string>();
  const [exercise, setExercise] = useState<string>();
  const [preExercise, setPreExercise] = useState('');
  const [order, setOrder] = useState<'newest_first' | 'oldest_first'>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPagesCount, setTotalPagesCount] = useState<number>(1);
  const [page, setPage] = useState<number>();
  const [tracksList, setTracksList] = useState<Track[]>([]);
  const [testimoniesList, setTestimoniesList] = useState<Testimony[]>([]);
  const tableBodyRef = useRef<HTMLTableSectionElement>(null);
  const { doRequest: getTracks, error: tracksError } =
    useRequest<TracksResponse>({
      url: tracksURL,
      method: 'get',
      body: {},
    });
  const {
    doRequest: getTestimonies,
    loading: testimoniesIsLoading,
    error: testimoniesError,
  } = useRequest<TestimonialsResponse>({
    url: testimonialsURL({ page, order, track, exercise }),
    method: 'get',
    body: {},
  });
  const onPageChange = (toPage: number) => {
    setPage(toPage);
  };
  const fetchTracks = useCallback(async () => {
    const data = await getTracks();
    if (data) {
      setTracksList(data.tracks);
    }
  }, []);
  useEffect(() => {
    fetchTracks();
  }, [fetchTracks]);

  useEffect(() => {
    const delaySetExercise = setTimeout(() => setExercise(preExercise), 3000);

    return () => clearTimeout(delaySetExercise);
  }, [preExercise]);

  const fetchTestimonies = useCallback(async () => {
    const data = await getTestimonies();
    if (data) {
      setTestimoniesList(data.testimonials.results);
      setCurrentPage(data.testimonials.pagination.current_page);
      setTotalPagesCount(data.testimonials.pagination.total_pages);
    }
  }, [order, exercise, track, page]);
  useEffect(() => {
    fetchTestimonies();
  }, [fetchTestimonies]);

  return (
    <React.Fragment>
      <Alert
        open={testimoniesError || tracksError}
        message="Something went wrong..."
        type="error"
      />
      <Container className="relative max-w-full mx-5 my-4 shadow-[0_0_60px_30px_#E5E5E5]">
        <Container className="flex flex-row w-full py-2 px-3 bg-white dark:bg-gray-700 border-b-2 border-exercism-border">
          <Container className="ml-3 mr-3">
            <Select
              value={track}
              avatar
              rightIcon
              onChange={(value) => setTrack(value)}
              defaultAvatar={DefaultTrack}
            >
              {tracksList.map((track, index) => (
                <Option
                  key={index.toString()}
                  chipNumber={track.num_exercises}
                  value={track.slug}
                  avatarUrl={track.icon_url}
                >
                  {track.title}
                </Option>
              ))}
            </Select>
          </Container>

          <TextInput
            width="410px"
            left={
              <SearchIcon className="h-[1.1rem] w-[1.1rem] text-exercism-100" />
            }
            value={preExercise}
            onChange={(e) => setPreExercise(e.target.value)}
            type="text"
            id="title"
            placeholder="Filter by exercise title"
          />
          <Container className="ml-auto mr-3">
            <Select
              value={order}
              onChange={(value) => setOrder(value)}
              label={
                <Container className="font-['Poppins'] h-[3rem] w-[21.8rem] bg-exercism-50 flex flex-row items-center justify-center">
                  <span className="ml-auto mr-auto opacity-50 font-normal">
                    Sort By {order}{' '}
                  </span>
                  <ChevronDownIcon className="h-5 w-5 text-exercism-100 mr-3" />
                </Container>
              }
            >
              <Option value="newest_first">Newest First</Option>
              <Option value="oldest_first">Oldest First</Option>
            </Select>
          </Container>
        </Container>
        {testimoniesIsLoading && (
          <Container
            className="absolute flex items-center h-40 justify-center z-[99]"
            style={{
              height: tableBodyRef.current?.clientHeight,
              width: tableBodyRef.current?.clientWidth,
              background: 'rgba(251, 252, 254, 0.95)',
            }}
          >
            <Spinner className="animation-spin" />
          </Container>
        )}
        <TableContainer className="">
          <Table>
            <TableHead></TableHead>
            <TableBody ref={tableBodyRef}>
              {testimoniesList.flatMap((testimony) => (
                <SingleTestimony
                  testimony={testimony}
                  key={testimony.id.toString()}
                ></SingleTestimony>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Pagination
          currentPage={currentPage}
          totalPageCount={totalPagesCount}
          onPageChange={onPageChange}
        />
      </Container>
    </React.Fragment>
  );
};

export default Testimonies;
