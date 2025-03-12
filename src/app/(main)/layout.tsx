import FooterSection from "@/section/footer";
import HeaderSection from "@/section/header";

export default function mainLayout({children}:{children:React.ReactNode}){
    
    return(
        <>
        <HeaderSection/>
        {children}
        <FooterSection/>
        </>
    )
}
