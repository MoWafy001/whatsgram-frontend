import React from 'react';

export default function Message({ data }) {

    const cantBeloaded = ['sticker', 'image', 'audio', 'ptt'].includes(data.type) && !data.hasMedia;

    console.log(data);

    return <div style={{
        ...component_style,
    }}>


        {/* author */}
        <h5 style={{
            background:'#111',
            margin: '0',
            width: 'fit-content',
            padding: '0.3rem',
            color: "#fff",
            marginLeft: data.fromMe ? 'auto' : 'unset',
            textAlign: data.fromMe ? 'right' : 'left',
        }}>
            {data.contact.isMe? "Me" : data.contact.pushname}
        </h5>

        <div style={{
            background: data.hasMedia ? '#0000' : ((data.type === 'revoked' || cantBeloaded) ? '#555' : "#fff"),
            overflowWrap: 'break-word',
            borderRadius: '0.2rem',
            padding: '0.5rem',
            width: 'fit-content',
            marginLeft: data.fromMe ? 'auto' : 'unset',
            textAlign: data.fromMe ? 'right' : 'left',
            maxWidth: '30%',
        }}>
            {/* image or sticker */}
            {data.hasMedia && ['sticker', 'image'].includes(data.type) &&
                <img src={`data:image/png;base64,${data.media.data}`} style={{ width: '100%', border: '2px solid #999', background: '#9995' }} alt="sticker" />
            }

            {/* audio */}
            {data.hasMedia && (data.type === 'ptt' || data.type === 'audio') &&
                <audio controls="controls" autobuffer="autobuffer" style={{ border: '1px solid #999', borderRadius: '10px', width: "100%" }}>
                    <source src={`data:audio/wav;base64,${data.media.data}`} />
                </audio>
            }

            {/* text */}
            {data.type === 'chat' &&
                data.body
            }

            {/* Message deleted */}
            {data.type === 'revoked' &&
                "This message was deleted"
            }

            {/* Message can't be loaded */}
            {cantBeloaded &&
                "This message can't be loaded"
            }
        </div>


    </div>;
}

const component_style = {
    margin: '0.5rem 0'
}