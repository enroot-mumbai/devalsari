import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { useRouter } from 'next/router'
import NavbarComponent from '../Navigation/BootstrapNavbar'

interface Props {
    props:any
}

// function chatPopup(){
//     const options = {
//         facebook: "297415037259213", // Facebook page ID
//         whatsapp: "+918591314651", // WhatsApp number
//         call_to_action: "Message us for any Query", // Call to action
//         button_color: "#129BF4", // Color of button
//         position: "right", // Position may be 'right' or 'left'
//         order: "whatsapp,facebook", // Order of buttons
//         pre_filled_message: "Hello, I wish to subscribe to your regular updates.", // WhatsApp pre-filled message
//     };
//     const proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
//     const s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
//     s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
//     const x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
// }

function Layout(props: any) {
    return (
        <div>
            <Header/>
            <body>
                <NavbarComponent/>
                {props.children}

                <Footer/>

                {/* { 
                typeof window !== 'undefined' &&
                chatPopup()
                } */}
            </body>
        </div>
    )
}

export default (Layout)