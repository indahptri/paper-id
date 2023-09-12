/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

'use client'

import * as Dialog from '@radix-ui/react-dialog';
import { useState, useEffect } from 'react';
import clsx from "clsx";
import { Button } from '@/component/button'

import closeIcon from '@/images/Cross.svg'

// Initial State
import arrowRight from '@/images/checkout/Payment method/arrow-right.svg'
import tokopedia from '@/images/checkout/Payment method/tokopedia.svg'
import koinworks from '@/images/checkout/Payment method/koinworks.svg'
import investree from '@/images/checkout/Payment method/investree.svg'
import creditcard from '@/images/checkout/Payment method/credit-card.svg'
import secure from '@/images/checkout/Payment method/secure-icon.svg'
import voc from '@/images/checkout/Payment method/voucher.svg'
import loadingIcon from '@/images/checkout/load.png'

// Finish State
import people from '@/images/checkout/people.svg'
import crossIcon from '@/images/checkout/Payment method/Cross.svg'

export default function PaymentModal({
  children
}) {
  const [type, setType] = useState('initial') // 'initial' | 'success' | 'finish'
  const [method, setMethod] = useState(undefined) // undefined | 'tokopedia' | 'creditcard' | 'koinworks' | 'investree'

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {children}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='bg-cyan-900 bg-opacity-80 fixed inset-0 z-20' />
        {
          type === 'initial' && (
            <InitialContent onSuccess={(method) => {
              setType('success')
              setMethod(method)
            }
            } />
          )
        }
        {
          type === 'success' && (
            <SuccessContent onClick={() => setType('finish')} method={method} />
          )
        }
        {
          type === 'finish' && (
            <Dialog.Content className='z-30 fixed top-[50%] left-[50%] max-h-[85vh] w-[22vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] px-4 pt-6 pb-8 bg-gradient-to-br from-cyan-600 to-sky-900 rounded-[10px] flex flex-col justify-center items-center gap-6'>
              <div className='flex flex-col justify-center gap-2'>
                <Dialog.Title className='text-center text-white text-[15px] font-bold leading-tight'>
                  Siap untuk mencoba Paper.id?
                </Dialog.Title>
                <Dialog.Description className='flex flex-col justify-center items-center gap-6'>
                  <div className='text-center text-white opacity-70 text-[13px] leading-[17.55px]'>
                    Paper.id dapat membantu Anda mendapatkan pembayaran lebih cepat untuk bisnis Anda!
                  </div>
                  <div>
                    <img src={people.src} />
                  </div>
                </Dialog.Description>
              </div>

              <Dialog.Close onClick={() => setType('initial')} asChild>
                <Button className='self-stretch items-center justify-center'>Selesai</Button>
              </Dialog.Close>

              <Dialog.Description className='text-white opacity-70 text-[13px] leading-[17.55px]'>
                <span>Hubungi kami </span>
                <span className='font-bold'>0821-1767-9137</span>
              </Dialog.Description>
            </Dialog.Content>
          )
        }
      </Dialog.Portal>
    </Dialog.Root>
  )
};

function InitialContent({ onSuccess }) {
  const [loading, setLoading] = useState(false)
  const [selected, setSelected] = useState(undefined)

  function handleOnClick() {
    setLoading(true)
  }

  useEffect(() => {
    if (loading === true) {
      setTimeout(() => {
        onSuccess(selected)
      }, 3000)
    }
  }, [loading])

  return (
    <Dialog.Content className='z-30 fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[50vw] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white flex flex-col pt-3 pb-10 px-10'>
      {loading &&
        <div className='fixed top-[0%] left-[0%] w-full h-full flex flex-col justify-center items-center opacity-80 bg-slate-50 rounded-2xl gap-3'>
          <div className='animate-spin'>
            <img src={loadingIcon.src} />
          </div>
          <div className='text-slate-500 text-sm font-normal leading-[19px]'>
            Mohon menunggu. Transkasi Anda sedang diproses
          </div>
        </div>
      }
      <Dialog.Close className='flex justify-end'>
        <button>
          <img src={closeIcon.src} />
        </button>
      </Dialog.Close>

      <header>
        <div className="w-[88px] h-6 p-1 bg-blue-500 bg-opacity-10 rounded-[3px] flex justify-start items-start gap-2.5">
          <div className="text-blue-400 text-xs font-normal leading-none">Payment Paper</div>
        </div>
        <Dialog.Title>Pilih metode pembayaran</Dialog.Title>
      </header>

      <Dialog.Description className='mt-8 flex justify-between items-start'>
        {/* L */}
        <div className="max-w-xs w-full flex flex-col justify-start items-start gap-4">
          <div className="flex flex-col justify-start items-start gap-[5px]">
            <div className="self-stretch flex justify-start items-start gap-[7px]">
              <div className="text-cyan-900 text-sm font-bold leading-tight">Tokopedia</div>
            </div>
            <div className="p-2.5 flex justify-start items-center gap-2">
              <input
                type='radio'
                name='method'
                value='tokopedia'
                id='tokopedia'
                onClick={() => setSelected('tokopedia')}
                className='w-5 h-5 p-2.5 rounded-[100px] border border-gray-400'
              />
              <label htmlFor='tokopedia' className='flex items-center gap-16'>
                <div>
                  <img src={tokopedia.src} />
                </div>
                <div className="text-cyan-900 text-sm font-normal leading-[19px]">Tokopedia</div>
              </label>
            </div>
          </div>

          <hr className='w-full border-0.5' color='#859CAB' />

          <div className="flex flex-col justify-start items-start gap-[5px]">
            <div className="self-stretch h-5 flex flex-col justify-center items-start gap-[5px]">
              <div className="self-stretch flex justify-start items-start gap-[7px]">
                <div className="text-cyan-900 text-sm font-bold leading-tight">Credit Card</div>
              </div>
            </div>
            <div className="p-2.5 flex justify-start items-center gap-2.5">
              <input
                type='radio'
                name='method'
                value='creditcard'
                id='creditcard'
                onClick={() => setSelected('creditcard')}
                className='w-5 h-5 p-2.5 rounded-[100px] border border-gray-400'
              />
              <label htmlFor='creditcard' className='flex items-center gap-[78px]'>
                <div>
                  <img src={creditcard.src} />
                </div>
                <div className="text-cyan-900 text-sm font-normal leading-[19px]">Kartu Kredit</div>
              </label>
            </div>
          </div>

          <hr className='w-full border-0.5' color='#859CAB' />

          <div className="flex flex-col justify-start items-start gap-4">
            <div className="flex justify-start items-start gap-[7px]">
              <div className="text-cyan-900 text-sm font-bold leading-tight">Paper Usaha</div>
            </div>
            {selected === undefined &&
              <>
                <PaymentRadio
                  imageSrc={koinworks.src}
                  name="KoinWorks"
                  className="gap-1.5"
                  gapClass="gap-1.5"
                  onChoose={() => setSelected('koinworks')}
                  selected={selected === "koinworks"}
                />
                <PaymentRadio
                  imageSrc={investree.src}
                  name="Investree"
                  className="gap-2.5"
                  gapClass="gap-2"
                  onChoose={() => setSelected('investree')}
                  selected={selected === "investree"}
                />
              </>
            }
            {selected === 'koinworks' &&
              <>
                <SelectedPaymentMethod
                  imageSrc={koinworks.src}
                  name="KoinWorks"
                  limit="Rp 10.000.000"
                  className="gap-1.5"
                  gapClass="gap-1.5"
                  onChoose={() => setSelected('koinworks')}
                  selected={selected === "koinworks"}
                />
                <PaymentRadio
                  imageSrc={investree.src}
                  name="Investree"
                  className="gap-2.5"
                  gapClass="gap-2"
                  onChoose={() => setSelected('investree')}
                  selected={selected === "investree"}
                />
              </>
            }
            {selected === 'investree' &&
              <>
                <PaymentRadio
                  imageSrc={koinworks.src}
                  name="KoinWorks"
                  className="gap-1.5"
                  gapClass="gap-1.5"
                  onChoose={() => setSelected('koinworks')}
                  selected={selected === "koinworks"}
                />
                <SelectedPaymentMethod
                  imageSrc={investree.src}
                  name="Investree"
                  limit="Rp 8.000.000"
                  className="gap-2.5"
                  gapClass="gap-2"
                  onChoose={() => setSelected('investree')}
                  selected={selected === "investree"}
                />
              </>
            }
          </div>
        </div>

        {/* R */}
        <div className='p-5 flex flex-col bg-white rounded-[5px] shadow'>
          <div className='p-2.5 flex items-center gap-28 rounded-[5px] border border-slate-300 '>
            <div className='flex items-center gap-[10px]'>
              <img src={voc.src} />
              <div className="text-slate-500 text-xs font-normal leading-none">Gunakan promo</div>
            </div>
            <div>
              <img src={arrowRight.src} />
            </div>
          </div>

          <div className='mt-4'>
            <div className="flex flex-col justify-start items-start gap-4">
              <div className="text-cyan-900 text-sm font-bold leading-[18.90px]">Rincian Pembayaran</div>
              <div className="flex flex-col justify-start items-start gap-2">
                <div className="flex justify-start items-start gap-28">
                  <div className="w-[73px] text-cyan-900 text-xs font-normal leading-none">Subtotal</div>
                  <div className="text-right text-cyan-900 text-xs font-normal leading-none">Rp 5.000.000</div>
                </div>

                <hr className='w-full border-0.5' color='#859CAB' />

                <div className="flex justify-start items-start gap-11">
                  <div className="w-[129px] text-cyan-900 text-sm font-bold leading-[18.90px]">Total Pembayaran</div>
                  <div className="text-right text-blue-500 text-sm font-bold leading-[18.90px]">Rp 5.000.000</div>
                </div>
              </div>
            </div>
          </div>

          <Button className='self-stretch items-center justify-center gap-[5px] mt-8' disabled={!selected} onClick={handleOnClick}>
            <img src={secure.src} />
            <span>Bayar Sekarang</span>
          </Button>
        </div>
      </Dialog.Description>
    </Dialog.Content>
  )
}

function SuccessContent({ onClick, method }) {
  return (
    <Dialog.Content className='z-30 fixed top-[50%] left-[50%] max-h-[85vh] w-[34vw] max-w-[50vw] translate-x-[-50%] translate-y-[-50%] px-6 pt-4 pb-6 bg-gradient-to-br from-cyan-600 to-sky-900 rounded-[10px] flex flex-col'>
      <Dialog.Close className='flex justify-end'>
        <button>
          <img src={crossIcon.src} />
        </button>
      </Dialog.Close>

      <div className='flex flex-col justify-center items-center mt-6 gap-3'>
        <Dialog.Title className='flex flex-col justify-center items-center gap-1'>
          <div className='text-center text-white text-lg font-bold leading-[27px]'>
            Selamat, Pembayaran Anda Berhasil!
          </div>
          <div className='text-center text-white text-sm font-normal leading-[21px] px-3.5'>
            Pembayaran sudah diterima oleh Paper.id dan dana akan diteruskan
            ke rekening penerima dengan rincian sebagai berikut:
          </div>
        </Dialog.Title>

        <Dialog.Description className='w-full px-5 py-2.5 flex flex-col justify-start items-center gap-2.5'>
          <div className="w-full p-5 bg-slate-50 rounded-[10px] flex flex-col justify-start items-start gap-3.5">
            <div className="self-stretch flex justify-between items-start gap-2.5">
              <div className="text-slate-400 text-sm font-bold leading-[18.90px]">Nominal Transaksi</div>
              <div className="text-cyan-900 text-sm font-bold leading-[18.90px]">Rp 5,000,000.00</div>
            </div>
            <div className="self-stretch flex justify-between items-start gap-2.5">
              <div className="text-slate-400 text-sm font-normal">Admin Fee</div>
              <div className="text-slate-500 text-sm font-normal leading-[19px]">Rp 2,090.00</div>
            </div>
            <div className="self-stretch flex justify-between items-start gap-2.5">
              <div className="text-slate-400 text-sm font-bold leading-[18.90px]">Total Bayar</div>
              <div className="text-cyan-900 text-sm font-bold leading-[18.90px]">Rp 5,002,090.00</div>
            </div>
            <div className="self-stretch flex justify-between items-start gap-2.5">
              <div className="text-slate-400 text-sm font-normal">Tanggal Pembayaran</div>
              <div className="text-slate-500 text-sm font-normal leading-[19px]">12 Juni 2023 - 12:17:17</div>
            </div>
          </div>

          <div className="w-full p-5 bg-slate-50 rounded-[10px] flex flex-col justify-start items-start gap-3.5">
            <div className="self-stretch flex justify-between items-start gap-2.5">
              <div className="text-slate-400 text-sm font-normal">Metode Pembayaran</div>
              {method === "koinworks" &&
                <div className="text-slate-500 text-sm font-normal leading-[19px]">Paper Usaha - KoinWorks</div>
              }
              {method === "investree" &&
                <div className="text-slate-500 text-sm font-normal leading-[19px]">Paper Usaha - Investree</div>
              }
            </div>
            <div className="self-stretch flex justify-between items-start gap-2.5">
              <div className="text-slate-400 text-sm font-normal">Sisa Limit</div>
              <div className="text-blue-500 text-sm font-bold leading-[18.90px]">Rp 5.000.000,00</div>
            </div>
          </div>
        </Dialog.Description>
      </div>

      <div className='cursor-pointer pt-6 flex justify-center'>
        <Button className='self-stretch items-center justify-center max-w-max' onClick={onClick}>
          Baik, Saya Mengerti
        </Button>
      </div>
    </Dialog.Content>
  )
}

function PaymentRadio({ imageSrc, name, className, gapClass, onChoose, selected }) {

  return (
    <div className="bg-white rounded-[5px] flex-col justify-start items-center">
      <div className={clsx("p-2.5 flex justify-start items-center", className)}>
        <input
          type='radio'
          name='method'
          value={selected}
          id={name}
          checked={selected}
          onClick={() => onChoose()}
          className='w-5 h-5 p-2.5 rounded-[100px] border border-gray-400'
        />
        <label htmlFor={name} className={clsx("flex items-center", gapClass)}>
          <img src={imageSrc} />
          <div className="text-cyan-900 text-sm font-normal leading-[19px]">{name}</div>
        </label>
      </div>
    </div>
  )
}

function SelectedPaymentMethod({ imageSrc, name, limit, className, gapClass, onChoose, selected }) {
  return (
    <div className="w-80 bg-blue-50 rounded-[5px] p-2.5 flex flex-col justify-start items-center gap-1">
      <div className='w-full flex justify-start item-center'>
        <div className={clsx("flex justify-start items-center", className)}>
          <input
            type='radio'
            name='method'
            value={selected}
            id={name}
            checked={selected}
            onClick={() => onChoose()}
            className='w-5 h-5 rounded-[100px] border border-gray-400'
          />
          <label htmlFor={name} className={clsx("flex items-center", gapClass)}>
            <img src={imageSrc} />
            <div className="text-cyan-900 text-sm font-normal leading-[19px]">{name}</div>
          </label>
        </div>
      </div>

      <div className='w-full flex justify-start items-center gap-2'>
        <div className="w-5 h-5 bg-blue-50 rounded-[100px]" />
        <div className="grow flex flex-col justify-start items-start gap-1">
          <div className="text-slate-500 text-sm font-normal leading-[19px]">Limit</div>
          <div className="text-cyan-900 text-sm font-bold leading-[18.90px]">{limit}</div>
        </div>
        <div className="grow basis-0 flex flex-col justify-start items-start gap-1">
          <div className="text-slate-500 text-sm font-normal leading-[19px]">Fee</div>
          <div className="text-cyan-900 text-sm font-bold leading-[18.90px]">1.1%</div>
        </div>
        <div className="grow basis-0 flex flex-col justify-start items-start gap-1">
          <div className="text-slate-500 text-sm font-normal leading-[19px]">Tenor</div>
          <div className="text-cyan-900 text-sm font-bold leading-[18.90px]">30 Hari</div>
        </div>
      </div>
    </div>
  )
}