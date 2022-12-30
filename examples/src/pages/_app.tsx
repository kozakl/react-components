import {useEffect} from 'react';
import {QueryClientProvider} from 'react-query'
import {AppProps} from 'next/app'
import {default as Head} from 'next/dist/shared/lib/head';
import {Dialog} from '@kozakl/components/dialog';
import {LoadingModal} from '@kozakl/components/loading-modal';
import {useDialogsState, useSpinnerState} from '@kozakl/states';
import {Toasts} from '@kozakl/components/toasts';
import {queryClient} from '../query';
import '@kozakl/components/style.css';
import '../theme';
import '../main.css';

const App = ({Component, pageProps}:AppProps)=> {
    const dialogs = useDialogsState().get(),
          spinner = useSpinnerState().get();
    
    useEffect(()=> {
        document.documentElement.setAttribute(
            'appearance',
            localStorage.getItem('appearance') ||
                'dark'
        );
    }, []);
    
    return (
        <QueryClientProvider client={queryClient}>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <meta name="theme-color" content="#1D1D1D"/>
                <link rel="shortcut icon" href="/favicon.ico"/>
                <link rel="manifest" href="/manifest.json"/>
                
                <title>Mikromusic CMS</title>
            </Head>
            <Component {...pageProps}/>
            
            {dialogs.map((dialog)=>
                <Dialog
                    key={dialog.id}
                    {...dialog}/>)}
            <Toasts/>
            <LoadingModal visible={spinner}/>
            <div id="modal"/>
        </QueryClientProvider>
    );
};

export default App;
