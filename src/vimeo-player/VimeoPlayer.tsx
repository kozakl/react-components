import {forwardRef, useEffect,
        useRef, useState} from 'react';
import {default as Player, Options} from '@vimeo/player';
import {useAsyncEffect} from '@kozakl/hooks';
import {classNames} from '@kozakl/utils';
import {Loading} from '../loading';
import {useTheme} from '../theme';
import React from 'react';

const VimeoPlayer = forwardRef<HTMLDivElement, Props>((props, ref)=> {
    const theme = useTheme('vimeoPlayer'),
          playerContainerRef = useRef<HTMLDivElement>(),
          playerRef = useRef<Player>();
    const [player, setPlayer] = useState({visible: true}),
          [loading, setLoading] = useState({visible: true});
    
    useAsyncEffect(async ()=> {
        if (!playerRef.current) {
            playerRef.current = new Player(playerContainerRef.current, {
                id: props.video.url as any,
                ...props.options
            });
            try {
                await playerRef.current.play();
            } catch (event) {}
            setPlayer({visible: true});
            setLoading({visible: false});
        } else if (playerContainerRef.current.firstChild) {
            (playerContainerRef.current.firstChild as HTMLElement).style.paddingTop = 
                `${props.video.height / props.video.width * 100}%`;
            playerRef.current.loadVideo(props.video.url as any);
        }
    }, [props.video]);
    
    useEffect(()=> {
        return ()=> {
            if (playerRef.current) {
                playerRef.current.destroy();
            }
        }
    }, []);
    
    return (
        <div
            className={classNames(
                props.className,
                theme.vimeoPlayer
            )}
            ref={ref}>
            <div style={{
                paddingTop: `${props.video.height / props.video.width * 100}%`}}>
                <div
                    className={theme.player}
                    ref={playerContainerRef}
                    style={{
                        visibility: player.visible ?
                            'visible' :
                            'hidden'}}/>
                {loading.visible &&
                    <Loading
                        className={theme.loading}
                        color="var(--color-primary)"/>}
            </div>
        </div>
    );
});

VimeoPlayer.defaultProps = {
    options: {
        transparent: false,
        responsive: true,
        portrait: false
    }
};

interface Props {
    className?:string;
    video: {
        url:string;
        width:number;
        height:number;
    },
    options:Options;
}

export default VimeoPlayer;
