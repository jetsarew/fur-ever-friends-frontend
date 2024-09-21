"use client";

import Image from 'next/image';

export default function Home() {
    return (
        <>
            <div className='container' style={{ maxWidth: '800px', margin: '100px auto', backgroundColor: 'transparent' }}>
                <div className='banner-img' style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', marginBottom: '50px' }}>
                    <Image
                        src="/home banner.png"
                        alt="banner"
                        width={800}
                        height={800}
                    />
                </div>

                <h1 style={{ fontSize: '25px', color: '#1C7DBB', fontWeight: 'bold', textAlign: 'center' }}>
                    Connecting pets and sitters <br />Creating happy moments together!
                </h1>

                {/* Container for all sections */}
                <div className='sections-container' style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
                
                {/* Main container for the content 1*/}
                <div className='contain' style={{ width:'200px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <div className='img1' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px', textAlign: 'center' }}>
                        <Image src="/home 1.png" alt="home 1" width={200} height={200} />
                        <h3 style={{ marginTop: '15px', color: '#1C7DBB', fontSize: '18px', fontWeight: 'bold' }}>
                            Better for Pet Owners
                        </h3>
                        <p style={{ maxWidth: '300px', marginTop: '10px', fontSize: '14px', color: '#333' }}>
                            Find trusted pet sitters with ease. Create activities for your pets, track their progress,
                            and receive real-time updates. Enjoy peace of mind knowing your pets are in good hands.
                        </p>
                    </div>
                </div>

                {/* Main container for the content 2*/}
                <div className='contain2' style={{ width:'200px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div className='img2' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px', textAlign: 'center' }}>
                        <Image src="/home 2.png" alt="home 2" width={200} height={200} />
                        <h3 style={{ marginTop: '15px', color: '#1C7DBB', fontSize: '18px', fontWeight: 'bold' }}>
                            Better for Pets
                        </h3>
                        <p style={{ maxWidth: '300px', marginTop: '10px', fontSize: '14px', color: '#333' }}>
                            Your pets deserve the best care. Our sitters provide personalized attention, ensuring your pets
                            stay happy, healthy, and active while you're away.
                        </p>
                    </div>
                </div>

                {/* Main container for the content 3*/}
                <div className='contain3' style={{ width:'200px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <div className='img3' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px', textAlign: 'center' }}>
                        <Image src="/home 3.png" alt="home 3" width={200} height={200} />
                        <h3 style={{ marginTop: '15px', color: '#1C7DBB', fontSize: '18px', fontWeight: 'bold' }}>
                            Better for Sitters
                        </h3>
                        <p style={{ maxWidth: '300px', marginTop: '10px', fontSize: '14px', color: '#333' }}>
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

            <style >{`
                .join-btn:hover{
                    background-color: #1C7DBB; 
                }
            `}</style>
            </div>
        </>
    );
}

