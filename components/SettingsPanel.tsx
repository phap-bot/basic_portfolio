
import React, { useState } from 'react';

interface SettingsPanelProps {
    toggleSnow: () => void;
    isSnowEnabled: boolean;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({ toggleSnow, isSnowEnabled }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-10 left-10 z-50">
            <div className={`relative transition-all duration-300 ${isOpen ? 'bg-slate-900/90 border border-slate-700' : ''} backdrop-blur-md rounded-2xl p-2`}>

                {/* Expanded Content */}
                {isOpen && (
                    <div className="mb-4 space-y-4 p-2 min-w-[150px] animate-in slide-in-from-bottom-5 fade-in duration-300">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Effects</span>
                        </div>

                        <button
                            onClick={toggleSnow}
                            className={`w-full flex items-center justify-between p-2 rounded-xl border transition-all ${isSnowEnabled
                                    ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                                    : 'bg-slate-800 border-slate-700 text-slate-500 hover:text-slate-300'
                                }`}
                        >
                            <span className="text-sm font-bold">Cyber Snow</span>
                            <div className={`w-8 h-4 rounded-full relative transition-colors ${isSnowEnabled ? 'bg-cyan-500' : 'bg-slate-700'}`}>
                                <div className={`absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full transition-transform ${isSnowEnabled ? 'translate-x-4' : 'translate-x-0'}`}></div>
                            </div>
                        </button>

                        {/* Placeholder for future settings */}
                        <div className="pt-2 border-t border-white/5 text-[10px] text-slate-600 text-center">
                            System Interface v2.0
                        </div>
                    </div>
                )}

                {/* Toggle Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`w-12 h-12 flex items-center justify-center rounded-xl transition-all ${isOpen ? 'bg-slate-800 text-white rotate-90' : 'bg-white/5 text-slate-400 hover:scale-110 hover:bg-cyan-500 hover:text-black'
                        }`}
                >
                    <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-gear'} text-xl`}></i>
                </button>
            </div>
        </div>
    );
};

export default SettingsPanel;
