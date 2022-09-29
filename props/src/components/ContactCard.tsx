import './ContactCard';

interface ContactCardProps{
    name: string;
    phoneNumber: string;
    favorite: boolean;
    muteNotifications: boolean;
    click: (phoneNumber: string) => void;
}

export function ContactCard({name, 
    phoneNumber, 
    favorite, 
    muteNotifications,
    click
}: ContactCardProps){
    return <div className="ContactCard" onClick={() => click(phoneNumber)}>
        <h3>{name}</h3>
        <p>{phoneNumber}</p>
        {favorite && <div className="heart">Heart</div>}
        <p>{muteNotifications ? 'Notifications muted'
        : 'Notifications are turned on'}</p>
    </div>;
}