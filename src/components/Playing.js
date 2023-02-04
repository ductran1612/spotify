import { useContext } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Songs } from '../Context';

function Playing() {
    const { song, handleSetSong } = useContext(Songs);

    const handleNext = () => {
        handleSetSong(song.id + 1);
    };
    const handlePrevious = () => {
        handleSetSong(song.id - 1);
    };

    return (
        <div>
            <AudioPlayer
                className="player-music"
                src={song.url}
                showSkipControls={true}
                showJumpControls={false}
                onClickNext={handleNext}
                onClickPrevious={handlePrevious}
            />
        </div>
    );
}

export default Playing;
