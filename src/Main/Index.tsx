import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import './style.css'

type MainProps = {
    title: String;
}

type ProfileData = {
    name: string;
    avatar_url: string;
};


export function Main(props: MainProps) {
    const [showImage, setShowImage] = useState(false);
    const [profileData, setProfileData] = useState<ProfileData | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    const handleClick = async () => {
        const url = `https://api.github.com/users/${searchQuery}`;
        const response = await fetch(url);
        const dataProfile = await response.json();

        if (response.ok) {
            setProfileData({
                name: dataProfile.name,
                avatar_url: dataProfile.avatar_url,
            });
            setShowImage(true);
        } else {
            alert(`Perfil não encontrado: ${dataProfile.message}`);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    return (
        <>
            <main className="main-container">
                <div className="main-container-content">
                    <div className="column">
                        <h1> {props.title} </h1>
                        <TextField
                            id="outlined-basic"
                            className="search"
                            label="Digite o perfil que deseja buscar:"
                            variant="outlined"
                            value={searchQuery}
                            onChange={handleInputChange}
                        />
                        <br />
                        <Button variant="contained" onClick={handleClick}>BUSCAR</Button>
                    </div>
                    {profileData && (
                        <div className="column profile">
                            <h2>{profileData.name}</h2>
                            <img className="image" src={profileData.avatar_url} alt={profileData.name} />

                        </div>
                    )}
                </div>
            </main>
        </>
    )
}