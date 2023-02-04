import { useContext } from 'react';
import { Songs } from '../Context';

function DetailSong() {
    const { song } = useContext(Songs);
    return (
        <div className="col-span-1">
            <h2 className="text-cyan-500 font-bold ml-5">Now playing</h2>
            <h2 className="text-neutral-400 text-3xl ml-5">{song.name}</h2>
            <div className="w-[200px] h-[200px] mt-2 m-auto overflow-hidden">
                <img src={song.links.images[0].url} alt="avatar" />
            </div>

            <div className="flex justify-evenly items-center mt-10">
                <img className="w-[60px] rounded-full" src={song.links.images[1].url} alt="avatar" />
                <span className="text-xl text-white">Alan Walker</span>
            </div>
        </div>
    );
}

export default DetailSong;
