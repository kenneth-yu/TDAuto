import aseLogo from '../../assets/services/ASE-logo.webp'
import { MechanicalIcon, BodyworkIcon, ElectricalIcon, InspectionIcon } from '../..'

export const servicesFallBackData = {
    heading: 'Our \n Services',
    logo: aseLogo,
    serviceOptions: [
        {
            label: "Mechanical",
            icon: MechanicalIcon
        },
        {
            label: "Bodywork",
            icon: BodyworkIcon
        },
        {
            label: "Electrical",
            icon: ElectricalIcon
        },
        {
            label: "Inspection",
            icon: InspectionIcon
        }
    ]
}