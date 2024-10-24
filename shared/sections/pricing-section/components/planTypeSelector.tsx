import { PlanType } from "../plans";
import './style.css';

interface PlanTypeSelectorProps {
    selectedPlanType: PlanType;
    setSelectedPlanType: (planType: PlanType) => void;
}

const PlanTypeSelector = ({ selectedPlanType, setSelectedPlanType }: PlanTypeSelectorProps) => {
    return (
        <div className="flex sm:w-1/2 w-full bg-bg-gray h-12 rounded-lg p-1 plan-selector">
            <div
                className="plan-slider"
                style={{
                    transform: selectedPlanType === 'monthly' ? 'translateX(0)' : 'translateX(100%)',
                }}
            ></div>

            <button
                className={`relative w-1/2 text-sm flex items-center justify-center font-semibold py-2 px-4 rounded-lg z-10`}
                onClick={() => setSelectedPlanType('monthly')}
            >
                Mensal
            </button>

            <button
                className={`relative w-1/2 text-sm flex items-center justify-center gap-1 font-semibold py-2 px-4 rounded-lg z-10`}
                onClick={() => setSelectedPlanType('annual')}
            >
                <span>Anual</span>
                <span className="tooltip-20off bg-red-900 rounded-md">20% OFF</span>
            </button>
        </div>
    )
}

export default PlanTypeSelector;