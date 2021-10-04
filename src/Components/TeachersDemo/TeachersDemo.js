import React from 'react';
import { Row } from 'react-bootstrap';
import usePersons from '../../Hooks/usePersons';
import TeacherCard from '../TeacherCard/TeacherCard';

const TeachersDemo = () => {
    const [persons] = usePersons();
    const newArr = persons.filter(x => x.isTeacher === true);
    return (
        <div>
            <div className='px-3 my-5'>
                <h2 className='text-center mb-3 fw-bold'>Teachers</h2>
                <Row md={3} lg={4} sm={2} xs={1} className="g-3">
                    {newArr.slice(0, 4).map(x => <TeacherCard data={x} key={x._id} ></TeacherCard>)}
                </Row>
            </div>
        </div>
    );
};

export default TeachersDemo;