
import React, { useState } from 'react';
import { DEV_NAME } from '../constants';
import { sendContactMessage } from '../services/backendService';

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setStatus('loading');
    const result = await sendContactMessage(formData);
    if (result) {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } else {
      setStatus('error');
    }
  };

  return (
    <footer id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <h2 className="text-6xl font-black heading-font mb-10 tracking-tighter leading-none">
              HÃY CÙNG<br />
              <span className="text-lime-400 italic">KẾT NỐI</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-md leading-relaxed">
              Bạn có dự án thú vị hay chỉ muốn trao đổi về AI?
              Mình luôn sẵn sàng!
            </p>

            <div className="space-y-10">
              <div className="group cursor-pointer">
                <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">My Email</h4>
                <p className="text-2xl font-bold group-hover:text-cyan-400 transition-colors tracking-tight">letanphap6543@gmail.com</p>
              </div>
              <div className="group cursor-pointer">
                <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Location</h4>
                <p className="text-2xl font-bold group-hover:text-cyan-400 transition-colors tracking-tight">Quy Nhon, Binh Dinh, VN</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-10 rounded-[3rem] border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest ml-4 text-slate-500">Name</label>
                  <input
                    name="name" value={formData.name} onChange={handleChange}
                    type="text" placeholder="Tên của bạn"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyan-500 transition-all text-sm"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest ml-4 text-slate-500">Email</label>
                  <input
                    name="email" value={formData.email} onChange={handleChange}
                    type="email" placeholder="Email liên hệ"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyan-500 transition-all text-sm"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest ml-4 text-slate-500">Message</label>
                <textarea
                  name="message" value={formData.message} onChange={handleChange}
                  rows={4} placeholder="Nội dung tin nhắn..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyan-500 transition-all text-sm resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-5 bg-white text-black font-black rounded-2xl hover:bg-cyan-400 hover:scale-[1.02] active:scale-95 transition-all shadow-xl flex items-center justify-center gap-3"
              >
                {status === 'loading' ? (
                  <i className="fa-solid fa-circle-notch animate-spin"></i>
                ) : status === 'success' ? (
                  <><i className="fa-solid fa-check text-green-600"></i> SENT SUCCESSFULLY</>
                ) : (
                  <>SEND MESSAGE <i className="fa-solid fa-paper-plane text-xs"></i></>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-slate-600">
          <p className="text-[10px] font-black tracking-widest uppercase">© {new Date().getFullYear()} {DEV_NAME} • DESIGNED FOR THE FUTURE</p>
          <div className="flex space-x-10 mt-6 md:mt-0">
            {['Twitter', 'Instagram', 'Dribbble'].map(s => (
              <a key={s} href="#" className="text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
