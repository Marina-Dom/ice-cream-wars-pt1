import { ContactCard } from "./ContactCard";

export function ContactList(){
    const click = (phoneNumber: string) => {
        console.log(phoneNumber);
    };

    return(
    <div className="ContactList">
        <ContactCard 
        name="Marina"
        phoneNumber="623-616-6633"
        favorite={false}
        muteNotifications={false}
        click={click}
        ></ContactCard>
        <ContactCard 
        name="Gabriel"
        phoneNumber="626-222-6676"
        favorite={true}
        muteNotifications={true}
        click={click}
        ></ContactCard>
        <ContactCard 
        name="Dillin"
        phoneNumber="616-222-7777"
        favorite={true}
        muteNotifications={false}
        click={click}
        ></ContactCard>
    </div>
    )
}