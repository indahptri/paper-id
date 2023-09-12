/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { Button } from '@/component/button'
import { ItemCart } from '@/component/item-cart'
import PaymentModal from '@/component/payment-modal'

import logo from '@/images/Logo.svg'

// HERO SECTION
import hijau from '@/images/hero/Hijau.svg'
import biru from '@/images/hero/Biru.svg'

// HOW TO SECTION
import pendaftaran from '@/images/how to/Pendaftaran.svg'

// CHECKOUT SECTION
import mid from '@/images/checkout/evedal.png'
import left from '@/images/checkout/soleil.png'
import right from '@/images/checkout/kursi-lipat.png'
import arrowup from '@/images/arrow-up.svg'

// BENEFITS SECTION
import check from '@/images/benefits/Check.svg'
import girl from '@/images/benefits/girl.png'

// FOOTER SECTION
import lady from '@/images/footer/lady.png'
import phone from '@/images/footer/phone-icon.svg'
import email from '@/images/footer/email-icon.svg'
import address from '@/images/footer/address-icon.svg'
import googleplay from '@/images/footer/googleplay.png'
import secure from '@/images/footer/secure-white.svg'
import kan from '@/images/footer/kan-logo.jpeg'
import bvcert from '@/images/footer/bv-cert.png'
import ig from '@/images/footer/instagram-icon.svg'
import fb from '@/images/footer/facebook-icon.svg'
import linkedin from '@/images/footer/linkedin-icon.svg'
import yt from '@/images/footer/youtube-icon.svg'
import Demo from '@/component/demo'

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <div className='w-full h-min-screen pt-[30px] pb-36 text-white bg-gradient-to-b from-blue-500 via-cyan-700 to-cyan-900'>
        <div className='px-[30px] mx-auto container flex flex-row justify-between items-center'>
          <div>
            <img src={logo.src} />
          </div>
          <div className='flex flex-row gap-8'>
            {
              [
                'Produk',
                'Solusi Bisnis',
                'Cara Kerja',
                'Harga',
                'Perusahaan'
              ].map(n => (
                <div key={n} className='font-bold uppercase'>
                  {n}
                </div>
              ))
            }
          </div>
          <div className='flex flex-row gap-3'>
            <Button secondary className='cursor-pointer'>
              LOGIN
            </Button>
            <Button className='cursor-pointer'>
              DAFTAR
            </Button>
          </div>
        </div>
        <div className='px-[30px] mx-auto container mt-[69px] flex flex-row justify-between gap-[48px] items-center'>
          <div className='flex flex-col gap-[8px] mt-12 max-w-lg'>
            <div className='text-[31px] font-normal'>
              Simulasikan Pembayaran Lebih Cepat dengan
            </div>
            <div className='text-[56px] font-bold'>
              API Embeded Financing Paper!
            </div>
          </div>
          <div>
            <Demo />
          </div>
        </div>
      </div>

      {/* HOW TO SECTION */}
      <div className='bg-white w-full h-[829px] flex flex-col gap-14.5'>
        {/* head */}
        <div className="text-cyan-900 text-5xl font-bold leading-[82px] mt-14 mx-auto">
          Proses Pendaftaran SmartCart Pay Later
        </div>

        {/* body */}
        <div className='flex items-center ml-36 mr-14'>
          {/* L */}
          <div className="w-1/2 max-h-[385px] flex flex-col justify-start items-center gap-[17px] pr-24">
            <div className="self-stretch h-[85px] p-[22px] bg-blue-500 rounded-[10px] flex justify-center items-center gap-5">
              <div className="text-white text-5xl font-bold leading-[64.80px]">1</div>
              <div className="grow shrink basis-0 text-white text-xl font-normal leading-[27px]">Isi data diri dan unggah dokumen legal Anda (SIUP, Akta Perusahaan, dll) pada halaman Pendaftaran.</div>
            </div>
            <div className="self-stretch h-[85px] p-[22px] rounded-[10px] flex justify-center items-center gap-5">
              <div className="text-cyan-900 text-5xl font-bold leading-[64.80px]">2</div>
              <div className="grow shrink basis-0 text-cyan-900 text-xl font-normal leading-[27px]">Dapatkan persetujuan penawaran dari berbagai macam lembaga keuangan penyedia pembayaran.</div>
            </div>
            <div className="self-stretch h-[85px] p-[22px] rounded-[10px] flex justify-center items-center gap-5">
              <div className="text-cyan-900 text-5xl font-bold leading-[64.80px]">3</div>
              <div className="grow shrink basis-0 text-cyan-900 text-xl font-normal leading-[27px]">Tanda tangan dokumen secara digital.</div>
            </div>
            <div className="self-stretch h-[85px] p-[22px] rounded-[10px] flex justify-center items-center gap-5">
              <div className="text-cyan-900 text-5xl font-bold leading-[64.80px]">4</div>
              <div className="grow shrink basis-0 text-cyan-900 text-xl font-normal leading-[27px]">Selesai! Anda dapat langsung melakukan transaksi dengan Paper Usaha.</div>
            </div>
          </div>

          {/* R */}
          <div className='w-1/2 flex items-center'>
            <img src={pendaftaran.src} />
          </div>
        </div>
      </div>

      {/* CHECKOUT SECTION */}
      <div className='w-full h-[736px] relative bg-slate-50 flex justify-center items-center'>
        <div className='max-w-[1265px] w-full flex flex-row justify-between items-center mx-8'>
          {/* L */}
          <div className="max-w-[591px] text-cyan-900 text-[40px] font-bold leading-[60px]">Lihat Simulasi Penggunaan Limit yang Diberikan!</div>

          {/* R */}
          <div className='flex w-[620px] min-w-[620px] justify-around relative'>
            <ItemCart small className="absolute translate-x-[-220px] scale-75 opacity-40" imageSrc={left.src} title="Soleil Kursi Ayun 2 Dudukan Stripe - Biru/putih" price="Rp10.000.000" qty="1">
              <Button className='self-stretch items-center justify-center cursor-default'>
                Bayar Sekarang
              </Button>
            </ItemCart>
            <ItemCart small className="absolute translate-x-[124px] scale-75 opacity-40" imageSrc={right.src} title="Soleil Kursi Lipat - Hitam" price="Rp5.000.000" qty="2">
              <Button className='self-stretch items-center justify-center cursor-default'>
                Bayar Sekarang
              </Button>
            </ItemCart>
            <ItemCart className="z-10" imageSrc={mid.src} title="EVEDAL Night Lamp" price="Rp5.000.000" qty="50">
              <PaymentModal>
                <Button className='self-stretch items-center justify-center cursor-pointer'>
                  Bayar Sekarang
                </Button>
              </PaymentModal>
            </ItemCart>
            <div className='animate-bounce-slow absolute -bottom-12 font-[16px] text-[#C2CDD5] flex gap-1'>
              <img src={arrowup.src} /> Anda dapat berinteraksi pada tampilan ini
            </div>
          </div>
        </div>
      </div>

      {/* BENEFITS SECTION */}
      <div className='w-full px-[150px] pt-24 pb-[164px] bg-white flex flex-col justify-start items-center gap-12'>
        {/* head */}
        <div className='w-4/5 pl-2.5 py-2.5 flex justify-center items-startgap-2.5'>
          <div className='max-w-4/5 text-center text-cyan-900 text-5xl font-bold leading-[82px]'>
            Manfaat yang Bisa Anda Rasakan
          </div>
        </div>

        {/* body */}
        <div className='w-full flex flex-col xl:flex-row justify-between items-center gap-2.5'>

          {/* L */}
          <div className='flex flex-col justify-start items-start gap-12'>
            {/* 1 */}
            <div className='flex justify-start items-start gap-4'>
              <img src={check.src} className='w-12 h-12 relative' />
              <div className='grow shrink basis-0 flex flex-col justify-start items-start gap-3.5'>
                <div className='self-stretch text-cyan-900 text-[26px] font-bold leading-loose'>One Time Integration</div>
                <div className='self-stretch text-cyan-900 text-xl font-normal leading-[30px]'>Menyediakan solusi pembiayaan dengan cara yang nyaman dan efisien bagi bisnis melalui satu proses integrasi.</div>
              </div>
            </div>
            {/* 2 */}
            <div className='flex justify-start items-start gap-4'>
              <img src={check.src} className='w-12 h-12 relative' />
              <div className='grow shrink basis-0 flex flex-col justify-start items-start gap-3.5'>
                <div className='self-stretch text-cyan-900 text-[26px] font-bold leading-loose'>Seamless User Experience</div>
                <div className='self-stretch text-cyan-900 text-xl font-normal leading-[30px]'>Proses pengajuan pinjaman dengan lebih mudah tanpa harus berinteraksi atau menelepon pihak pemberi pinjaman.</div>
              </div>
            </div>
            {/* 3 */}
            <div className='flex justify-start items-start gap-4'>
              <img src={check.src} className='w-12 h-12 relative' />
              <div className='grow shrink basis-0 flex flex-col justify-start items-start gap-3.5'>
                <div className='self-stretch text-cyan-900 text-[26px] font-bold leading-loose'>One Submission for Multiple Financial Institutions</div>
                <div className='self-stretch text-cyan-900 text-xl font-normal leading-[30px]'>Cukup dengan satu kali pendaftaran, Anda dapat langsung diproses secara otomatis ke beberapa lembaga keuangan.</div>
              </div>
            </div>
          </div>

          {/* R */}
          <div className="w-[473px] min-w-[473px] h-[499px] relative">
            <img className="w-full h-[507.30px] left-[47.56px] top-[-6.72px]" src={girl.src} />
          </div>
        </div>
      </div>

      {/* FOOTER SECTION */}
      <div className="w-full relative bg-gradient-to-br from-cyan-600 via-sky-950 to-sky-950 pt-[68px] pb-[240px] px-8">

        {/* CTO */}
        <div className="max-w-[1199.55px] min-h-[377px] left-0 top-0 flex flex-col lg:flex-row items-center gap-[88px] mx-auto">
          {/* L */}
          <img className="w-[314px] h-[313px]" src={lady.src} />
          {/* R */}
          <div className="grow shrink basis-0 flex flex-col justify-start items-start gap-[37px]">
            <div className="self-stretch flex flex-col justify-start items-start gap-[35px]">
              <div className="self-stretch text-white text-[37px] font-bold leading-[59px]">Solusi Pembayaran untuk Kelancaran <br />Cashflow Bisnis via Paper id</div>
            </div>
            <Button>
              Daftar Gratis Sekarang
            </Button>
          </div>
        </div>

        {/* FOOTER */}
        <div className="max-w-7xl mx-auto pt-[75px] flex-col justify-start flex gap-[21px]">

          <hr />

          {/* 1 */}
          <div className="justify-between flex flex-col lg:flex-row items-center gap-y-12">
            {/* L */}
            <div className="w-[470px] flex flex-col justify-start items-start gap-[25px]">
              <img src={logo.src} />

              <div className="self-stretch flex-col justify-start items-start gap-[15px] flex">
                <div className="self-stretch h-[199px] flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch flex justify-start items-start">
                    <div className="w-[204px] flex flex-col justify-start items-stretch gap-2.5">
                      <div className="flex flex-col justify-start items-start gap-2">
                        <div className="flex flex-col justify-start items-start gap-3">
                          <div className="text-white text-sm font-bold leading-[21px]">Hubungi Kami</div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-start items-start gap-2">
                        <div className="flex justify-start items-start gap-[5px]">
                          <div className="px-0.5 py-1 flex justify-start items-start gap-[7px]">
                            <div className="w-[15px] h-[15px] relative">
                              <img src={phone.src} className="w-[14.33px] h-[14.31px] left-[0.39px] top-[0.41px]" />
                            </div>
                          </div>
                          <div className="flex flex-col justify-start items-start gap-[5px]">
                            <div className="text-white text-sm font-normal leading-[21px]">+62 821 1767 9137</div>
                            <div className="text-white text-sm font-normal leading-[21px]">+62 811 1098 746 (WA)</div>
                          </div>
                        </div>
                        <div className="flex justify-center items-center gap-[7px]">
                          <div className="px-0.5 py-1 flex justify-start items-start gap-[7px]">
                            <div className="w-3.5 h-3 relative">
                              <img src={email.src} className="w-[13.38px] h-[11.35px] left-[0.25px] top-[0.26px]" />
                            </div>
                          </div>
                          <div className="flex flex-col justify-start items-start gap-[7px]">
                            <div className="text-white text-sm font-normal leading-[21px]">support@paper.id</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-[266px] flex flex-col justify-start gap-2.5">
                      <div className="flex flex-col justify-start items-start gap-2">
                        <div className="text-white text-sm font-bold leading-[21px]">Jam Operasional</div>
                      </div>
                      {/* col */}
                      <div className="self-stretch flex justify-start items-stretch gap-[5px]">
                        <div className="self-stretch grow flex flex-col justify-start items-stretch gap-[5px]">

                          <div className="flex flex-col justify-start items-stretch gap-[5px]">
                            {/* row   senin-jumat*/}
                            <div className="flex justify-start items-start gap-[7px]">
                              <div className="h-[21px] grow flex justify-between items-start">
                                <div className="self-stretch grow text-white text-sm font-normal leading-[21px]">Senin - Jumat</div>
                                <div className="text-white text-sm font-normal leading-[21px]">:</div>
                              </div>
                              <div className="text-white text-sm font-normal leading-[21px]">07.00 - 22.00 WIB</div>
                            </div>
                            {/* row   libur nasional*/}
                            <div className="flex justify-start items-start gap-[7px]">
                              <div className="h-[21px] grow flex justify-between items-start">
                                <div className="self-stretch grow text-white text-sm font-normal leading-[21px]">Sabtu & Libur Nasional</div>
                                <div className="text-white text-sm font-normal leading-[21px]">:</div>
                              </div>
                              <div className="text-white text-sm font-normal leading-[21px]">08.00 - 17.00 WIB</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-[357px] flex justify-start items-start gap-[7px]">
                    <div className="px-0.5 py-1 flex justify-start items-start gap-[7px]">
                      <div className="w-3 h-[13px] relative">
                        <img src={address.src} className="w-[11.32px] h-[12.33px] left-[0.34px] top-[0.33px]" />
                      </div>
                    </div>
                    <div className="grow shrink basis-0 flex flex-col justify-start items-start gap-[7px]">
                      <div className="w-[168px] text-white text-sm font-normal leading-[21px]">Jl. Sunter Garden Raya No.5D, RT.6/RW.12, Sunter Agung, Tj. Priok, Kota Jkt Utara, DKI Jakarta 14350</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* R */}
            <div className="flex justify-start items-start gap-[21px]">
              {/* fitur */}
              <div className="flex flex-col justify-start items-start gap-[7px]">
                {/* t */}
                <div className="text-white text-sm font-bold leading-[21px]">Fitur Lainnya</div>
                {/* b */}
                <div className="flex justify-start items-start gap-[30px]">
                  {/* col-1 */}
                  <div className="flex flex-col justify-start items-start gap-2.5">
                    <div className="text-white text-sm font-normal leading-[21px]">Order dan Penawaran</div>
                    <div className="text-white text-sm font-normal leading-[21px]">Akuntansi Gratis</div>
                    <div className="text-white text-sm font-normal leading-[21px]">Digital Payment</div>
                    <div className="text-white text-sm font-normal leading-[21px]">Manajemen Stok</div>
                    <div className="text-white text-sm font-normal leading-[21px]">Laporan Keuangan</div>
                    <div className="text-white text-sm font-normal leading-[21px]">One Click Share</div>
                    <div className="text-white text-sm font-normal leading-[21px]">Template Invoice</div>
                  </div>
                  {/* col-2 */}
                  <div className="flex flex-col justify-start items-start gap-2.5">
                    <div className="text-white text-sm font-normal leading-[21px]">Billing</div>
                    <div className="text-white text-sm font-normal leading-[21px]">Financing</div>
                    <div className="text-white text-sm font-normal leading-[21px]">PaperChain</div>
                    <div className="text-white text-sm font-normal leading-[21px]">PaperTrade</div>
                    <div className="text-white text-sm font-normal leading-[21px]">Enterprise Solution</div>
                    <div className="text-white text-sm font-normal leading-[21px]">PayPer</div>
                  </div>
                </div>
              </div>

              {/* solusi */}
              <div className="w-[67px] flex flex-col justify-start items-start gap-[7px]">
                <div className="text-white text-sm font-bold leading-[21px]">Solusi</div>
                <div className="flex justify-start items-start gap-[25px]">
                  <div className="flex flex-col justify-start items-start gap-2.5">
                    <div className="text-white text-sm font-normal leading-[21px]">Jual Beli</div>
                    <div className="text-white text-sm font-normal leading-[21px]">Jasa</div>
                    <div className="text-white text-sm font-normal leading-[21px]">F&B</div>
                  </div>
                </div>
              </div>

              {/* perusahaan */}
              <div className="flex flex-col justify-start items-start gap-[7px]">
                <div className="text-white text-sm font-bold leading-[21px]">Perusahaan</div>
                <div className="flex justify-start items-start gap-[25px]">
                  <div className="flex flex-col justify-start items-start gap-2.5">
                    <div className="text-white text-sm font-normal leading-[21px]">Tentang Kami</div>
                    <div className="text-white text-sm font-normal leading-[21px]">Cara Kerja</div>
                    <div className="text-white text-sm font-normal leading-[21px]">Karir</div>
                    <div className="text-white text-sm font-normal leading-[21px]">Pricing</div>
                    <div className="text-white text-sm font-normal leading-[21px]">Blog</div>
                    <div className="text-white text-sm font-normal leading-[21px]">Help Center</div>
                    <div className="text-white text-sm font-normal leading-[21px]">FAQ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr />

          {/* 2 */}
          <div className="flex justify-center items gap-7">
            <div className='w-[65px] h-[21px]' />
            <div className="flex justify-start items-start gap-7">

              {/* download */}
              <div className="flex flex-col justify-start items-center gap-[5px]">
                <div className="text-white text-sm font-bold leading-[21px]">Download Paper.id apps</div>
                <img className="w-[114px] h-[41px]" src={googleplay.src} />
              </div>

              {/* keamanan */}
              <div className="flex flex-col justify-start items-center gap-[5px]">
                <div className="text-white text-sm font-bold leading-[21px]">Keamanan</div>
                <div className="flex justify-start items-center gap-[13px]">
                  <div className="w-[98px] h-[19px] relative">
                    <img className='h-[19.02px] left-[-0.02px] top-[-0.02px]' src={secure.src} />
                  </div>
                  <div className="flex justify-start items-center gap-[5px]">
                    {/* logo-2 */}
                    <img className="w-[49px] h-7" src={kan.src} />
                    {/* logo-3 */}
                    <img className="w-[71px] h-9" src={bvcert.src} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr />

          {/* 3 */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-2.5">

            {/* L */}
            <div className="text-white text-opacity-60 text-sm font-bold leading-[21px]">
              Copyright © 2023 Paper.id (PT Pakar Digital Global)
            </div>

            {/* M */}
            <div className="flex justify-start items-start gap-[15px]">
              <img src={yt.src} className='w-[25px] h-[25px]' />
              <img src={fb.src} className='w-[25px] h-[25px]' />
              <img src={linkedin.src} className='w-[25px] h-[25px]' />
              <img src={ig.src} className='w-[25px] h-[25px]' />
            </div>

            {/* R */}
            <div className="flex justify-start items-start gap-[35px]">
              <div className="text-white text-sm font-bold leading-[21px]">Privacy Policy</div>
              <div className="text-white text-sm font-bold leading-[21px]">Terms & Condition</div>
              <div className="text-white text-sm font-bold leading-[21px]">Sitemap</div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
