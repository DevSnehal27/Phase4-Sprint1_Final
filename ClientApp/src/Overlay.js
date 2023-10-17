import React from 'react';
import Joyride from 'react-joyride';

const Overlay = ({ steps, run, stepIndex, onStart, onNext, onFinish, onSkip }) => {
    const currentStep = steps[stepIndex];

    return (
        <>
            {run && (
                <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999, background: 'rgba(0, 0, 0, 0.5)' }}>
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '40px', background: 'white', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', borderRadius: '4px', textAlign: 'center' }}>
                        {currentStep.content}
                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                            {stepIndex < steps.length - 1 ? (
                                <button style={{ padding: '10px 20px', background: '#007BFF', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }} onClick={onNext}>Next</button>
                            ) : (
                                <button style={{ padding: '10px 20px', background: '#007BFF', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }} onClick={onFinish}>Finish</button>
                            )}
                            <button style={{ padding: '10px 20px', background: '#E0E0E0', color: 'black', border: 'none', borderRadius: '4px', marginLeft: '10px', cursor: 'pointer' }} onClick={onSkip}>Skip</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Overlay;
