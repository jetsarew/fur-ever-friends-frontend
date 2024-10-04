import Image from 'next/image';

export default function Home() {

    // text over pic
    const overlayStyle: React.CSSProperties = {
        position: 'absolute',
        top: '10%',
        left: '20%',
        color: 'white',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        textAlign: 'left',
        // textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
        maxWidth: '410px',  
        lineHeight: '1.2',   
    };

    return (
        <>
            <div className='container' style={{ margin: '100px auto', backgroundColor: 'transparent' }}>
                <div className='banner-img' style={{ position: 'relative', display: 'flex', justifyContent: 'center', marginTop: '50px', marginBottom: '50px' }}>
                    <Image
                        src="/banner.webp"
                        alt="banner"
                        width={800}
                        height={800}
                    />
                    {/* Overlay Text */}
                    <div style={overlayStyle}>
                        <h1>Where every pet finds a caring sitter, and every owner finds peace</h1>
                    </div>
                </div>

                <h1 style={{ fontSize: '25px', color: '#1C7DBB', fontWeight: 'bold', textAlign: 'center' }}>
                    Connecting pets and sitters <br />Creating happy moments together!
                </h1>

                {/* Container for all sections */}
                <div className='sections-container' style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>

                    {/* Main container for content 1 */}
                    <div className='contain' style={{ width: '324px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <div className='img1' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px', textAlign: 'center' }}>
                            <Image src="/content1.svg" alt="home 1" width={200} height={200} />
                            <h3 style={{ marginTop: '15px', color: '#1C7DBB', fontSize: '18px', fontWeight: 'bold' }}>
                                Better for Pet Owners
                            </h3>
                            <p style={{ maxWidth: '324px', marginTop: '10px', fontSize: '14px', color: '#333' }}>
                                Find trusted pet sitters with ease. Create activities for your pets, track their progress,
                                and receive real-time updates. Enjoy peace of mind knowing your pets are in good hands.
                            </p>
                        </div>
                    </div>

                    {/* Main container for content 2 */}
                    <div className='contain2' style={{ width: '324px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className='img2' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px', textAlign: 'center' }}>
                            <Image src="/content2.svg" alt="home 2" width={200} height={200} />
                            <h3 style={{ marginTop: '15px', color: '#1C7DBB', fontSize: '18px', fontWeight: 'bold' }}>
                                Better for Pets
                            </h3>
                            <p style={{ maxWidth: '324px', marginTop: '10px', fontSize: '14px', color: '#333' }}>
                                Your pets deserve the best care. Our sitters provide personalized attention, ensuring your pets
                                stay happy, healthy, and active while you're away.
                            </p>
                        </div>
                    </div>

                    {/* Main container for content 3 */}
                    <div className='contain3' style={{ width: '324px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                        <div className='img3' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px', textAlign: 'center' }}>
                            <Image src="/content3.svg" alt="home 3" width={200} height={200} />
                            <h3 style={{ marginTop: '15px', color: '#1C7DBB', fontSize: '18px', fontWeight: 'bold' }}>
                                Better for Sitters
                            </h3>
                            <p style={{ maxWidth: '324px', marginTop: '10px', fontSize: '14px', color: '#333' }}>
                                Connect with pet owners and offer your services on your terms. Choose the activities you want to do,
                                set your own rates, and enjoy flexible work that fits your schedule.
                            </p>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                    <button className='join-btn'
                        style={{
                            backgroundColor: '#0070f3',
                            color: 'white',
                            padding: '10px 20px',
                            fontSize: '16px',
                            borderRadius: '5px',
                            border: 'none',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            transition: 'background-color 0.3s'
                        }}>
                        Join Now
                    </button>
                </div>

                <style>{`
                .join-btn:hover {
                    background-color: #1C7DBB;
                }
            `}</style>
            </div>
        </>
    );
}
