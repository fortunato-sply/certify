export interface Plan {
    name: string;
    description: string;
    monthlyPrice: number;
    annualPrice: number;
    features: string[];
    favorite: boolean;
}

export type PlanType = "monthly" | "annual";

export const plans: Plan[] = [
    {
        name: "Starter",
        description: "Para quem está começando",
        monthlyPrice: 29,
        annualPrice: 23,
        features: [
            "Gere até 30 certificados por mês",
            "Personalização de templates",
            "Cursos ilimitados"
        ],
        favorite: false
    },
    {
        name: "Growth",
        description: "Para quem quer crescer",
        monthlyPrice: 49,
        annualPrice: 39,
        features: [
            "Gere até 80 certificados por mês",
            "Dashboard de alunos e cursos",
            "Personalização de templates",
            "Cursos ilimitados",
            "Suporte prioritário"
        ],
        favorite: false
    },
    {
        name: "Unlimited",
        description: "Para os profissionais",
        monthlyPrice: 89,
        annualPrice: 71,
        features: [
            "Gere certificados ilimitados",
            "Biblioteca de templates customizados",
            "Dashboard de alunos e cursos",
            "Personalização de templates",
            "Cursos ilimitados",
            "Suporte prioritário"
        ],
        favorite: true
    },
]