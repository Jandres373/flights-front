import {Open_Sans, Nunito_Sans, Poppins} from 'next/font/google'

export const titles = Poppins({ subsets: ['latin'], style: 'normal', weight: "900"})
export const titles2 = Open_Sans({ subsets: ['latin'], weight: "800"});
export const subtitles = Poppins({ subsets: ['latin'], style: 'italic', weight: "400"})
export const subtitles2 =  Nunito_Sans({ subsets: ['latin'],  weight: "400"});
export const complementary = Poppins({ subsets: ['latin'], style: 'normal', weight: "300"})