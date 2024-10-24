import { Plan, PlanType } from "../plans";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow, Pagination } from 'swiper/modules'

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

type DesktopPlanViewProps = {
    plans: Plan[];
    selectedPlanType: PlanType;
}

const DesktopPlanView = ({ plans, selectedPlanType } : DesktopPlanViewProps) => {
    return (
        <div className="sm:flex hidden w-full h-3/4 gap-4">
                {plans.map((plan) => (
                    <div key={plan.name} className={"p-6 bg-bg-gray rounded-lg shadow-md min-w-40 w-1/3 max-h-full flex flex-col space-between relative " + (plan.favorite ? 'favorite-border' : '')}>
                        {
                            plan.favorite && 
                            <div className="favorite-tip">
                                <span>MAIS POPULAR</span>
                            </div>
                        }
                        <div className="flex flex-col flex-1 mt-4">
                            <div className="flex flex-col">
                                <h3 className="text-4xl font-semibold m-0">{plan.name}</h3>
                                <p className="text-gray-subtitle">{plan.description}</p>
                            </div>
                            
                            <ul className="mt-6 space-y-2 text-sm text-gray-200 flex flex-col gap-1">
                                {plan.features.map((feature, index) => (
                                    <li key={index} className="flex gap-2 items-center">
                                        <div className="bg-primary w-5 h-5 min-h-5 min-w-5 rounded-full flex items-center justify-center text-xs text-white font-bold">
                                            <FontAwesomeIcon icon={faCheck} />  
                                        </div>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div>
                            <p className="text-5xl font-bold pt-4">
                                {
                                    selectedPlanType == 'monthly' &&
                                    <span>R${plan.monthlyPrice}</span>
                                }
                                {
                                    selectedPlanType == 'annual' &&
                                    <span>R${plan.annualPrice}</span>
                                }
                                    <span className="text-sm font-semibold text-gray-200">/mês</span>
                            </p>
                            {
                                selectedPlanType == 'annual' &&
                                <p className="text-sm text-gray-subtitle">cobrados anualmente</p>
                            }
                            <button className="bg-primary text-white rounded-lg px-4 py-2 mt-4 w-full text-lg font-semibold">Assinar</button>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default DesktopPlanView;