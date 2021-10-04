import React from 'react';
import { Row } from 'react-bootstrap';
import usePersons from '../../Hooks/usePersons';
import TeacherCard from '../TeacherCard/TeacherCard';

const Teachers = () => {
    const [persons] = usePersons();
    // console.log(persons);
    const newArr = persons.filter(x => x.isTeacher === true);
    return (
        <div className='px-3 my-4 '>
            <h2 className='text-center mb-3 fw-bold  '>Teachers </h2>
            <Row md={3} lg={4} sm={2} xs={1} className="g-3">
                {newArr.map(x => <TeacherCard data={x} key={x._id} ></TeacherCard>)}
            </Row>
        </div>
    );
};

export default Teachers;