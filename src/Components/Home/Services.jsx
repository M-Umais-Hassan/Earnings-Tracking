import React from 'react';
import './style.css';

// icons
import { AiOutlineCheckCircle } from 'react-icons/ai';

// data
import { serviceData } from './serviceData';

const Services = () => {
    return (
        <div className="services__sec">
            {serviceData.map((service) => {
                return (
                    <div className={`service ${service.side}`} key={service.id}>
                        <div className="left__box">
                            <h1>{service.title}</h1>
                            <h3>{service.text}</h3>
                            {service.features.map((feature, index) => {
                                return (
                                    <div className="service__flex" key={index}>
                                        <AiOutlineCheckCircle /><h4>{feature}</h4>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="right__box">
                            <div id="circle__1"></div>
                            <div id="circle__2"></div>
                            <img src={service.img} alt="service" />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Services
