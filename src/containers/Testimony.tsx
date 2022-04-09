import React, { FC, HTMLAttributes } from 'react';
import Avatar from '../components/Avatar';
import Container from '../components/Container';
import { Row, Column } from '../components/Table';
import { Testimony as TestimonyType } from '../types/testimony';
import moment from 'moment';
import { ChevronRightIcon } from '@heroicons/react/outline';
interface TestimonyProps extends HTMLAttributes<HTMLTableRowElement> {
  testimony: TestimonyType;
}
const Testimony: FC<TestimonyProps> = ({ testimony, ...otherProps }) => {
  return (
    <Row {...otherProps} className="flex-row font-['Poppins'] z-1">
      <Column className="mr-1 flex-shrink-0">
        <Avatar src={testimony.track.icon_url} alt={testimony.track.title} />
      </Column>
      <Column className="mr-30 flex-shrink-0 flex flex-row gap-4 items-center w-1/5">
        <Avatar
          src={testimony.mentor.avatar_url}
          rounded
          alt={testimony.mentor.handle}
        />
        <Container className="flex gap-1 flex-col">
          <h3 className="font-medium text-[1rem] text-exercism-400 non-italic">
            {testimony.mentor.handle}
          </h3>
          <span className="font-normal text-[0.8rem] text-exercism-100 non-italic">
            {testimony.exercise.slug}
          </span>
        </Container>
      </Column>
      <Column className="w-2/5 flex px-3 items-start flex-shrink-0">
        <span className="w-full text-left truncate font-normal text-[0.94rem] text-exercism-200 non-italic">
          {testimony.content}
        </span>
      </Column>
      <Column className="flex items-center gap-10 flex-row ml-auto mr-2">
        <span className="flex-shrink-0 font-medium text-[0.8rem] text-exercism-100 non-italic">
          {moment(testimony.created_at).local().startOf('seconds').fromNow()}
        </span>
        <ChevronRightIcon className="text-exercism-100 h-[2rem] w-[2rem]" />
      </Column>
    </Row>
  );
};

export default Testimony;
