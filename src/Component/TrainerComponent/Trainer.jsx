import React from "react";
import ReactDOM from "react-dom";
import './trainer.css'
const Trainer = () => {
    const trainers = [
        {
            id: 1,
            name: "Mohith R",
            subject: "Python ",
            experience: 3,
        },
        {
            id: 2,
            name: "Jyothsna M Gowda",
            subject: "Java",
            experience: 3,
        },
        {
            id: 3,
            name: "Likith S",
            subject: "Testing",
            experience: 3,

        },
        {
            id: 5,
            name: "Hrudya",
            subject: "J2EE",
            experience: 3,

        },
        ,
        {
            id: 5,
            name: "Prajwal C ",
            subject: "MERN Stack",
            experience: 3,
        }
    ];

    return (
        <div className="app">
            <h1 className="title">Meet Our Trainers</h1>
            <div className="trainer-list">
                {trainers.map((trainer) => (
                    <div key={trainer.id} className="trainer-card">
                        <img
                            src={trainer.image}
                            alt={trainer.name}
                            className="trainer-image"
                        />
                        <div className="trainer-details">
                            <h3 className="trainer-name">{trainer.name}</h3>
                            <p className="trainer-subject">
                                <strong>Subject:</strong> {trainer.subject}
                            </p>
                            <p className="trainer-experience">
                                <strong>Experience:</strong> {trainer.experience} years
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Trainer;