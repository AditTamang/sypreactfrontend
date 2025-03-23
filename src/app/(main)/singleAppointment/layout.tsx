import FooterSection from "@/section/footer";
import HeaderSection from "@/section/header";
import { Footer } from "react-day-picker";

export default function AppointmentLayout({children}:{children:React.ReactNode}){
    return(
        <>
        <HeaderSection/>
        {children}
        <FooterSection/>
        </>
    )
}
