/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

"use client";

import { useState } from "react";
import { Button } from "./button";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

import arrowup from "@/images/arrow-up.svg";
import line from "@/images/hero/form/Line.svg";
import phase1 from "@/images/hero/form/point-1.svg";
import phase2 from "@/images/hero/form/point-2.svg";
import phase3 from "@/images/hero/form/point-3.svg";
import checkIcon from "@/images/hero/form/check.svg";
import green2 from "@/images/hero/form//2-green.svg";
import green3 from "@/images/hero/form/3-green.svg";

// DATA DIRI
import calendar from "@/images/hero/form/calendar.svg";
import addimg from "@/images/hero/form/add-img.svg";
import addfile from "@/images/hero/form/add-file.svg";
import ktp from "@/images/hero/form/ktp.svg";
import filedoc from "@/images/hero/form/file.svg";
import cs from "@/images/hero/form/cs.svg";

// PENAWARAN
import koinworks from "@/images/hero/form/koinworks.svg";
import investree from "@/images/hero/form/investree.svg";

// TTD
import uploadIcon from "@/images/hero/form/Upload.svg";
import ttd from "@/images/hero/form/ttd.svg";
import closeX from "@/images/hero/form/closeX.svg";
import pay from "@/images/hero/form/pay.svg";

// CTO
import people from "@/images/checkout/people.svg";
import retry from "@/images/hero/form/retry.svg";

export default function Demo({}) {
  const [status, setStatus] = useState("intro");
  // 'intro' | 'datadiri' | 'penawaran' | 'ttd'

  return (
    <>
      {status === "intro" && <Intro onFilled={() => setStatus("datadiri")} />}
      {status === "datadiri" && (
        <FormDataDiri onFilled={() => setStatus("penawaran")} />
      )}
      {status === "penawaran" && (
        <PilihPenawaran onFilled={() => setStatus("ttd")} />
      )}
      {status === "ttd" && <TtdDocument onFilled={() => setStatus("intro")} />}
    </>
  );
}

function Intro({ onFilled }) {
  const [filled, setFilled] = useState(false);

  return (
    <div className="relative">
      <div className="w-[540px] p-4 bg-gradient-to-r from-white/50 to-white/0 backdrop-blur-xl rounded-[10px] border-4 border-gray-200 flex flex-col justify-start items-start gap-2">
        <div className="w-full px-6 py-[30px] bg-white rounded-[10px] flex flex-col justify-start items-center gap-6">
          <div className="self-stretch h-6 flex flex-col justify-center items-center gap-1">
            <div className="text-center text-cyan-900 text-lg font-bold leading-normal">
              Lihat Simulasi Pinjaman Anda
            </div>
          </div>

          <div
            className="self-stretch h-[68px] flex flex-col justify-start items-start gap-1"
            onClick={() => setFilled(true)}
          >
            <div className="text-cyan-900 text-base font-bold leading-snug">
              Jumlah Pinjaman
            </div>
            <div className="self-stretch h-[42px] flex flex-col justify-start items-start">
              <div className="self-stretch px-2.5 py-[5px] flex justify-between items-center gap-2.5">
                {filled === false ? (
                  <div className="grow shrink basis-0 text-slate-300 text-2xl font-bold leading-loose">
                    Rp 0
                  </div>
                ) : (
                  <div className="grow shrink basis-0 text-blue-500 text-2xl font-bold leading-loose">
                    Rp 5.000.000
                  </div>
                )}
              </div>
              <div className="self-stretch h-[0px] border border-gray-200"></div>
            </div>
          </div>

          <div className="self-stretch h-[68px] flex flex-col justify-start items-start gap-1">
            <div className="text-cyan-900 text-base font-bold leading-snug">
              Estimasi Fee
            </div>
            <div className="self-stretch h-[42px] flex flex-col justify-start items-start">
              <div className="self-stretch px-2.5 py-[5px] flex justify-between items-center gap-2.5">
                {filled === false ? (
                  <div className="grow shrink basis-0 text-slate-300 text-2xl font-bold leading-loose">
                    0%
                  </div>
                ) : (
                  <div className="grow shrink basis-0 text-blue-500 text-2xl font-bold leading-loose">
                    1,1%
                  </div>
                )}
              </div>
            </div>
          </div>

          <Button
            className="justify-center items-center w-[214px]"
            disabled={!filled}
            onClick={onFilled}
          >
            Daftar Sekarang!
          </Button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="animate-bounce-slow absolute -bottom-12 font-[16px] text-[#C2CDD5] flex gap-1">
          <img src={arrowup.src} /> Anda dapat berinteraksi pada tampilan ini
        </div>
      </div>
    </div>
  );
}

function FormDataDiri({ onFilled }) {
  const [filled, setFilled] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div className="relative" onClick={() => setFilled(true)}>
      <div className="w-[572px] h-[829px] p-4 bg-gradient-to-r from-white/50 to-white/0 backdrop-blur-xl rounded-[10px] border-4 border-gray-300">
        <div className="w-full h-full px-6 py-[30px] bg-white rounded-[10px] flex flex-col justify-start items-center gap-[18px]">
          {confirmed && (
            <div className="z-30 absolute top-[1.9%] w-[532px] h-[789.5px] bg-cyan-900 bg-opacity-80 rounded-[10px]">
              <div className="z-50 absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-30%] px-4 py-6 bg-gradient-to-br from-cyan-600 to-sky-900 rounded-[10px] w-80 h-[413px] flex flex-col justify-center items-center gap-6">
                <div className="flex flex-col justify-center gap-2">
                  <div className="text-center text-white text-[15px] font-bold leading-tight">
                    Pengajuan Anda Berhasil Diajukan!
                  </div>
                  <div className="flex flex-col justify-center items-center gap-6">
                    <div className="text-center text-white opacity-70 text-[13px] leading-[17.55px]">
                      Data pengajuan Anda telah kami terima dan akan diproses
                      dalam waktu 2x24 jam.
                    </div>
                    <div>
                      <img src={cs.src} />
                    </div>
                  </div>
                </div>

                <Button
                  className="self-stretch items-center justify-center"
                  onClick={onFilled}
                >
                  Ya, Saya Mengerti
                </Button>

                <div className="text-center text-white opacity-70 text-[13px] leading-[17.55px]">
                  <span>Butuh bantuan? Hubungi kami </span>
                  <span className="font-bold">0821-1767-9137 </span>
                  <span>atau klik </span>
                  <span className="font-bold">di sini</span>
                </div>
              </div>
            </div>
          )}

          {/* FORM HEADER */}
          <div className="w-full px-4 py-2 rounded-[5px] flex justify-center items-center gap-4">
            <div className="w-fit flex justify-start items-center gap-2.5">
              <div>
                <img src={phase1.src} />
              </div>
              <div className="text-lime-300 text-sm font-bold leading-[21px]">
                Isi Form
              </div>
            </div>

            <div className="w-5">
              <img src={line.src} />
            </div>

            <div className="w-fit flex justify-start items-center gap-2.5">
              <div>
                <img src={phase2.src} />
              </div>
              <div className="text-gray-300 text-sm font-bold leading-[21px]">
                Pilih Penawaran
              </div>
            </div>

            <div className="w-5">
              <img src={line.src} />
            </div>

            <div className="flex justify-start items-center gap-2.5">
              <div>
                <img src={phase3.src} />
              </div>
              <div className="text-gray-300 text-sm font-bold leading-[21px] flex flex-col">
                <span>Tanda Tangan</span>
                <span>Dokumen</span>
              </div>
            </div>
          </div>

          {/* FORM TITLE */}
          <div className="self-stretch h-[22px] flex flex-col justify-start items-start gap-1">
            <div className="text-cyan-900 text-base font-bold leading-snug">
              Data Diri Lengkap
            </div>
          </div>

          {/* FORM COLUMNS */}
          <div className="self-stretch h-[50px] flex flex-col justify-center items-start gap-[5px]">
            <div className="self-stretch text-cyan-900 text-xs font-bold leading-[18px]">
              Nama Lengkap
            </div>
            <div className="self-stretch h-[27px] flex flex-col justify-center items-center gap-[5px]">
              <div className="self-stretch h-[27px] flex flex-col justify-center items-start">
                <div className="self-stretch h-[27px] px-2.5 py-[5px] bg-slate-50 flex justify-start items-center gap-2.5">
                  {filled === false ? (
                    <div className="grow shrink basis-0 text-slate-300 text-sm font-normal leading-[21px]">
                      cth. Priska Aprilia
                    </div>
                  ) : (
                    <div className="grow shrink basis-0 text-cyan-900 text-sm font-normal leading-[21px]">
                      Priska Aprilia
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="self-stretch h-[50px] flex flex-col justify-center items-start gap-[5px]">
            <div className="self-stretch text-cyan-900 text-xs font-bold leading-[18px]">
              Alamat Lengkap
            </div>
            <div className="self-stretch h-[27px] flex flex-col justify-center items-center gap-[5px]">
              <div className="self-stretch h-[27px] flex flex-col justify-center items-start">
                <div className="self-stretch h-[27px] px-2.5 py-[5px] bg-slate-50 flex justify-start items-center gap-2.5">
                  {filled === false ? (
                    <div className="grow shrink basis-0 text-slate-300 text-sm font-normal leading-[21px]">
                      cth. Jl. Sunter Garden Raya No.5D, RT.6/RW.12
                    </div>
                  ) : (
                    <div className="grow shirnk basis-0 text-cyan-900 text-sm font-normal leading-[21px]">
                      Jl. Sunter Garden Raya No.5D, RT.6/RW.12
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="self-stretch flex justify-start items-start gap-4">
            <div className="grow shrink basis-0 flex flex-col justify-center items-start gap-[5px]">
              <div className="self-stretch text-cyan-900 text-xs font-bold leading-[18px]">
                Tanggal Lahir
              </div>
              <div className="self-stretch h-[27px] flex flex-col justify-center items-center gap-[5px]">
                <div className="self-stretch h-[27px] flex flex-col justify-center items-start">
                  <div className="self-stretch h-[27px] px-2.5 py-[5px] bg-slate-50 flex justify-start items-center gap-2.5">
                    {filled === false ? (
                      <div className="grow shrink basis-0 text-slate-300 text-sm font-normal leading-[21px]">
                        Pilih Tanggal
                      </div>
                    ) : (
                      <div className="grow shirnk basis-0 text-cyan-900 text-sm font-normal leading-[21px]">
                        30-01-97
                      </div>
                    )}
                    <div className="w-6 h-6 p-1 flex justify-center items-center">
                      <img src={calendar.src} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grow shrink basis-0 flex flex-col justify-center items-start gap-[5px]">
              <div className="self-stretch text-cyan-900 text-xs font-bold leading-[18px]">
                No. Telp
              </div>
              <div className="self-stretch h-[27px] flex flex-col justify-center items-center gap-[5px]">
                <div className="self-stretch h-[27px] flex flex-col justify-center items-start">
                  <div className="self-stretch h-[27px] px-2.5 py-[5px] bg-slate-50 flex justify-start items-center gap-2.5">
                    {filled === false ? (
                      <div className="grow shrink basis-0 text-slate-300 text-sm font-normal leading-[21px]">
                        cth. 08123456789
                      </div>
                    ) : (
                      <div className="grow shirnk basis-0 text-cyan-900 text-sm font-normal leading-[21px]">
                        08123456789
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="grow shrink basis-0  flexflex-col justify-center items-start gap-[5px]">
              <div className="self-stretch text-cyan-900 text-xs font-bold leading-[18px]">
                No. Telp Perusahaan
              </div>
              <div className="self-stretch h-[27px] flex flex-col justify-center items-center gap-[5px]">
                <div className="self-stretch h-[27px] flex flex-col justify-center items-start">
                  <div className="self-stretch h-[27px] px-2.5 py-[5px] bg-slate-50 flex justify-start items-center gap-2.5">
                    {filled === false ? (
                      <div className="grow shrink basis-0 text-slate-300 text-sm font-normal leading-[21px]">
                        cth. 021998997
                      </div>
                    ) : (
                      <div className="grow shirnk basis-0 text-cyan-900 text-sm font-normal leading-[21px]">
                        021998997
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex self-stretch justify-start items-start gap-4">
            <div className="grow shrink basis-0 self-stretch flex flex-col justify-center items-start gap-[5px]">
              <div className="self-stretch text-cyan-900 text-xs font-bold leading-[18px]">
                No. KTP
              </div>
              <div className="self-stretch h-[27px] flex flex-col justify-center items-center gap-[5px]">
                <div className="self-stretch h-[27px] flex flex-col justify-center items-start">
                  <div className="self-stretch h-[27px] px-2.5 py-[5px] bg-slate-50 flex justify-start items-center gap-2.5">
                    {filled === false ? (
                      <div className="grow shrink basis-0 text-slate-300 text-sm font-normal leading-[21px]">
                        cth. 327123456789
                      </div>
                    ) : (
                      <div className="grow shirnk basis-0 text-cyan-900 text-sm font-normal leading-[21px]">
                        327123456789
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="grow shrink basis-0 flex flex-col justify-center items-start gap-[5px]">
              <div className="self-stretch text-cyan-900 text-xs font-bold leading-[18px]">
                No. NPWP
              </div>
              <div className="self-stretch h-[27px] flex flex-col justify-center items-center gap-[5px]">
                <div className="self-stretch h-[27px] flex flex-col justify-center items-start">
                  <div className="self-stretch h-[27px] px-2.5 py-[5px] bg-slate-50 flex justify-start items-center gap-2.5">
                    {filled === false ? (
                      <div className="grow shrink basis-0 text-slate-300 text-sm font-normal leading-[21px]">
                        cth. 990998997996
                      </div>
                    ) : (
                      <div className="grow shirnk basis-0 text-cyan-900 text-sm font-normal leading-[21px]">
                        990998997996
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="grow shrink basis-0 self-stretch flex flex-col justify-center items-start gap-[5px]">
              <div className="self-stretch text-cyan-900 text-xs font-bold leading-[18px]">
                Jumlah Pinjaman
              </div>
              <div className="self-stretch h-[27px] flex-col justify-center items-center gap-[5px] flex">
                <div className="self-stretch h-[27px] flex-col justify-center items-start flex">
                  <div className="self-stretch h-[27px] px-2.5 py-[5px] bg-slate-50 flex justify-start items-center gap-2.5">
                    {filled === false ? (
                      <div className="grow shrink basis-0">
                        <span className="text-slate-600 text-sm font-normal leading-[21px]">
                          Rp{" "}
                        </span>
                        <span className="text-slate-300 text-sm font-normal leading-[21px]">
                          0
                        </span>
                      </div>
                    ) : (
                      <div className="grow shrink basis-0">
                        <span className="text-slate-600 text-sm font-normal leading-[21px]">
                          Rp 5.000.000
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="self-stretch h-[50px] flex-col justify-center items-start gap-[5px] flex">
            <div className="self-stretch text-cyan-900 text-xs font-bold leading-[18px]">
              Nama Perusahaan
            </div>
            <div className="self-stretch h-[27px] flex-col justify-center items-center gap-[5px] flex">
              <div className="self-stretch h-[27px] flex-col justify-center items-start flex">
                <div className="self-stretch h-[27px] px-2.5 py-[5px] bg-slate-50 flex justify-start items-center gap-2.5">
                  {filled === false ? (
                    <div className="grow shrink basis-0 text-slate-300 text-sm font-normal leading-[21px]">
                      cth. PT Pembangunan Sejahtera
                    </div>
                  ) : (
                    <div className="grow shirnk basis-0 text-cyan-900 text-sm font-normal leading-[21px]">
                      PT Pembangunan Sejahtera
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="self-stretch h-[50px] flex-col justify-center items-start gap-[5px] flex">
            <div className="self-stretch text-cyan-900 text-xs font-bold leading-[18px]">
              Alamat Perusahaan
            </div>
            <div className="self-stretch h-[27px] flex-col justify-center items-center gap-[5px] flex">
              <div className="self-stretch h-[27px] flex-col justify-center items-start flex">
                <div className="self-stretch h-[27px] px-2.5 py-[5px] bg-slate-50 flex justify-start items-center gap-2.5">
                  {filled === false ? (
                    <div className="grow shrink basis-0 text-slate-300 text-sm font-normal leading-[21px]">
                      cth. Jl Otto Iskandardinata 30, DKI Jakarta
                    </div>
                  ) : (
                    <div className="grow shirnk basis-0 text-cyan-900 text-sm font-normal leading-[21px]">
                      Jl Otto Iskandardinata 30, DKI Jakarta
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* UPLOAD DOCS */}
          <div className="self-stretch h-[22px] flex-col justify-start items-start gap-1 flex">
            <div className="text-cyan-900 text-base font-bold leading-snug">
              Unggah Dokumen Pribadi
            </div>
          </div>

          <div className="self-stretch flex justify-start items-start gap-3">
            <div className="grow shrink basis-0 p-2.5 rounded-[10px] border border-indigo-50 flex flex-col justify-center items-start gap-2">
              <div className="self-stretch flex justify-start items-start gap-2">
                {filled === false ? (
                  <div className="w-[72px] h-12 p-2.5 bg-blue-100 rounded-[5px] justify-center items-center gap-2.5 flex">
                    <div>
                      <img src={addimg.src} />
                    </div>
                  </div>
                ) : (
                  <div>
                    <img src={ktp.src} />
                  </div>
                )}
                <div className="grow shrink basis-0 self-stretch flex flex-col justify-start items-start gap-1">
                  <div className="self-stretch text-cyan-900 text-sm font-bold leading-[21px]">
                    Foto e-KTP
                  </div>
                  {filled === false ? (
                    <div className="self-stretch text-gray-400 text-xs font-normal leading-none">
                      Foto belum diunggah
                    </div>
                  ) : (
                    <div className="self-stretch text-gray-400 text-xs font-normal leading-none">
                      ktp_saya.jpg
                    </div>
                  )}
                </div>
              </div>

              {filled === false ? (
                <Button
                  secondary
                  tertiary={true}
                  className="self-stretch flex justify-center items-center"
                >
                  Unggah
                </Button>
              ) : (
                <Button
                  secondary
                  tertiary={true}
                  className="self-stretch flex justify-center items-center"
                >
                  Ubah
                </Button>
              )}
            </div>

            <div className="grow shrink basis-0 p-2.5 rounded-[10px] border border-indigo-50 flex flex-col justify-center items-start gap-2">
              <div className="self-stretch flex justify-start items-start gap-2">
                {filled === false ? (
                  <div className="w-[72px] h-12 p-2.5 bg-blue-100 rounded-[5px] justify-center items-center gap-2.5 flex">
                    <div>
                      <div>
                        <img src={addfile.src} />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <img src={filedoc.src} />
                  </div>
                )}

                <div className="grow shrink basis-0 self-stretch flex flex-col justify-start items-start gap-1">
                  <div className="self-stretch text-cyan-900 text-sm font-bold leading-[21px]">
                    Dokumen Legal
                  </div>
                  {filled === false ? (
                    <div className="self-stretch text-gray-400 text-xs font-normal leading-none">
                      Dokumen belum diunggah
                    </div>
                  ) : (
                    <div className="self-stretch text-gray-400 text-xs font-normal leading-none">
                      legal_document_final.pdf
                    </div>
                  )}
                </div>
              </div>

              {filled === false ? (
                <Button
                  secondary
                  tertiary={true}
                  className="self-stretch flex justify-center items-center"
                >
                  Unggah
                </Button>
              ) : (
                <Button
                  secondary
                  tertiary={true}
                  className="self-stretch flex justify-center items-center"
                >
                  Ubah
                </Button>
              )}
            </div>
          </div>

          <Button
            className="w-[214px] justify-center items-center"
            disabled={!filled}
            onClick={() => setConfirmed(true)}
          >
            Simpan
          </Button>
        </div>
      </div>
      {/* END FORM */}

      <div className="flex justify-center items-center">
        <div className="animate-bounce-slow absolute -bottom-12 font-[16px] text-[#C2CDD5] flex gap-1">
          <img src={arrowup.src} /> Anda dapat berinteraksi pada tampilan ini
        </div>
      </div>
    </div>
  );
}

function PilihPenawaran({ onFilled }) {
  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const buttonEnabled = selected1 || selected2;

  return (
    <div className="relative">
      <div className="w-[572px] h-[598.43px] p-4 bg-gradient-to-r from-white/50 to-white/0 backdrop-blur-xl rounded-[10px] border-4 border-gray-300">
        <div className="w-full h-full px-6 py-[30px] bg-white rounded-[10px] flex flex-col justify-start items-center gap-[18px]">
          {/* FORM HEADER */}
          <div className="w-full rounded-[5px] flex justify-center items-center gap-4">
            <div className="w-fit flex justify-start items-center gap-2.5">
              <div>
                <img src={checkIcon.src} />
              </div>
              <div className="text-lime-300 text-sm font-bold leading-[21px]">
                Isi Form
              </div>
            </div>

            <div className="w-5">
              <img src={line.src} />
            </div>

            <div className="w-fit flex justify-start items-center gap-2.5">
              <div>
                <img src={green2.src} />
              </div>
              <div className="text-lime-300 text-sm font-bold leading-[21px]">
                Pilih Penawaran
              </div>
            </div>

            <div className="w-5">
              <img src={line.src} />
            </div>

            <div className="flex justify-start items-center gap-2.5">
              <div>
                <img src={phase3.src} />
              </div>
              <div className="text-gray-300 text-sm font-bold leading-[21px] flex flex-col">
                <span>Tanda Tangan</span>
                <span>Dokumen</span>
              </div>
            </div>
          </div>

          <div className="self-stretch h-[76.43px] p-2.5 bg-slate-50 rounded-[5px] flex-col justify-center items-start gap-[5px] flex">
            <div className="text-center text-blue-200 text-sm font-bold leading-[18.90px]">
              Jumlah Pinjaman
            </div>
            <div className="self-stretch text-blue-500 text-2xl font-bold leading-loose">
              Rp 5.000.000
            </div>
          </div>

          <div className="self-stretch h-6 flex-col justify-center items-start gap-1 flex">
            <div className="text-center text-cyan-900 text-lg font-bold leading-normal">
              Pilih penawaran untuk pinjaman Anda
            </div>
          </div>

          <Checkbox.Root
            className="self-stretch h-[122px] p-2.5 bg-white rounded-lg shadow border border-gray-200"
            onClick={() => setSelected1(!selected1)}
          >
            {/* CHECKBOX */}
            <div className="flex flex-col justify-start items-start p-2.5 gap-[5px]">
              <div className="flex justify-start items-center gap-2">
                <div className="w-[18px] h-[18px] rounded border border-gray-200">
                  <Checkbox.Indicator>
                    <CheckIcon className="w-[18px] h-[18px] text-white bg-blue-500 rounded" />
                  </Checkbox.Indicator>
                </div>
                <label>
                  <img src={koinworks.src} />
                </label>
              </div>

              {/* INFO */}
              <div className="self-stretch justify-start items-start gap-2 inline-flex">
                <div className="w-5 h-5 bg-white rounded-full border border-white" />
                <div className="w-[156px] flex-col justify-start items-start gap-1 inline-flex">
                  <div className="text-slate-500 text-sm font-normal leading-[19px]">
                    Jumlah Pinjaman
                  </div>
                  <div className="text-cyan-900 text-sm font-bold leading-[18.90px]">
                    Rp 3.000.000,00
                  </div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                  <div className="text-slate-500 text-sm font-normal leading-[19px]">
                    Fee
                  </div>
                  <div className="text-cyan-900 text-sm font-bold leading-[18.90px]">
                    1.1%
                  </div>
                </div>
              </div>
            </div>
          </Checkbox.Root>

          <Checkbox.Root
            className="self-stretch h-[122px] p-2.5 bg-white rounded-lg shadow border border-gray-200"
            onClick={() => setSelected2(!selected2)}
          >
            {/* CHECKBOX */}
            <div className="flex flex-col justify-start items-start p-2.5 gap-[5px]">
              <div className="flex justify-start items-center gap-3">
                <div className="w-[18px] h-[18px] rounded border border-gray-200">
                  <Checkbox.Indicator>
                    <CheckIcon className="w-[18px] h-[18px] text-white bg-blue-500 rounded" />
                  </Checkbox.Indicator>
                </div>
                <label>
                  <img src={investree.src} />
                </label>
              </div>

              {/* INFO */}
              <div className="self-stretch justify-start items-start gap-2 inline-flex">
                <div className="w-5 h-5 bg-white rounded-full border border-white" />
                <div className="w-[156px] flex-col justify-start items-start gap-1 inline-flex">
                  <div className="text-slate-500 text-sm font-normal leading-[19px]">
                    Jumlah Pinjaman
                  </div>
                  <div className="text-cyan-900 text-sm font-bold leading-[18.90px]">
                    Rp 2.000.000,00
                  </div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                  <div className="text-slate-500 text-sm font-normal leading-[19px]">
                    Fee
                  </div>
                  <div className="text-cyan-900 text-sm font-bold leading-[18.90px]">
                    1.1%
                  </div>
                </div>
              </div>
            </div>
          </Checkbox.Root>

          <Button
            className="w-[214px] flex justify-center items-center"
            disabled={!buttonEnabled}
            onClick={onFilled}
          >
            Simpan
          </Button>
        </div>
      </div>
      {/* END FORM */}

      <div className="flex justify-center items-center">
        <div className="animate-bounce-slow absolute -bottom-12 font-[16px] text-[#C2CDD5] flex gap-1">
          <img src={arrowup.src} /> Anda dapat berinteraksi pada tampilan ini
        </div>
      </div>
    </div>
  );
}

function TtdDocument({ onFilled }) {
  const [filled, setFilled] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [submited, setSubmit] = useState(false);

  return (
    <div className="relative">
      {confirmed && (
        <div className="z-30 absolute top-[3.3%] left-[3.5%] w-[532px] h-[557px] bg-cyan-900 bg-opacity-80 rounded-[10px]">
          <div className="z-50 absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-35%] px-4 py-6 bg-gradient-to-br from-cyan-600 to-sky-900 rounded-[10px] w-80 h-[413px] flex flex-col justify-center items-center gap-6">
            <div className="flex flex-col justify-center gap-2">
              <div className="text-center text-white text-[15px] font-bold leading-tight">
                Selamat, Limit Anda Sudah Aktif!
              </div>
              <div className="flex flex-col justify-center items-center gap-6">
                <div className="text-center text-white opacity-70 text-[13px] leading-[17.55px]">
                  Anda sudah dapat melakukan transaksi di Paper.id menggunakan
                  limit Paper Usaha.
                </div>
                <div>
                  <img src={pay.src} />
                </div>
              </div>
            </div>

            <Button
              className="self-stretch items-center justify-center"
              onClick={() => setSubmit(true)}
            >
              Ya, Saya Mengerti
            </Button>

            <div className="text-center text-white opacity-70 text-[13px] leading-[17.55px]">
              <span>Butuh bantuan? Hubungi kami </span>
              <span className="font-bold">0821-1767-9137 </span>
              <span>atau klik </span>
              <span className="font-bold">di sini</span>
            </div>
          </div>
        </div>
      )}

      {submited && (
        <div>
          <div className="z-50 absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-35%] px-4 py-6 bg-gradient-to-br from-cyan-600 to-sky-900 rounded-[10px] w-80 h-[413px] flex flex-col justify-center items-center gap-6">
            <div className="flex flex-col justify-center gap-2">
              <div className="text-center text-white text-[15px] font-bold leading-tight">
                Siap untuk mencoba Paper.id?
              </div>
              <div className="flex flex-col justify-center items-center gap-6">
                <div className="text-center text-white opacity-70 text-[13px] leading-[17.55px]">
                  Paper.id dapat membantu Anda mendapatkan pembayaran lebih
                  cepat untuk bisnis Anda!
                </div>
                <div>
                  <img src={people.src} />
                </div>
              </div>
            </div>

            <Button
              className="self-stretch items-center justify-center gap-1.5"
              onClick={onFilled}
            >
              <img src={retry.src} />
              <span>Ulangi Simulasi</span>
            </Button>

            <div className="text-center text-white opacity-70 text-[13px] leading-[17.55px]">
              <span>Hubungi kami </span>
              <span className="font-bold">0821-1767-9137 </span>
            </div>
          </div>
        </div>
      )}

      <div className="w-[572px] p-4 bg-gradient-to-r from-white/50 to-white/0 backdrop-blur-xl rounded-[10px] border-4 border-gray-300">
        <div className="w-full h-full px-6 py-[30px] bg-white rounded-[10px] flex flex-col justify-start items-center gap-6">
          {/* FORM TITLE */}
          <div className="w-full flex-col justify-center items-center gap-1 inline-flex">
            <div className="text-center text-cyan-900 text-lg font-bold leading-normal">
              Lihat Simulasi Pinjaman Anda
            </div>
          </div>

          {/* FORM HEADER */}
          <div className="w-full rounded-[5px] flex justify-center items-center gap-4">
            <div className="w-fit flex justify-start items-center gap-2.5">
              <div className="w-fit">
                <img src={checkIcon.src} />
              </div>
              <div className="text-lime-300 text-sm font-bold leading-[21px]">
                Isi Form
              </div>
            </div>

            <div className="w-5">
              <img src={line.src} />
            </div>

            <div className="w-fit flex justify-start items-center gap-2.5">
              <div>
                <img src={checkIcon.src} />
              </div>
              <div className="text-lime-300 text-sm font-bold leading-[21px]">
                Pilih Penawaran
              </div>
            </div>

            <div className="w-5">
              <img src={line.src} />
            </div>

            <div className="flex justify-start items-center gap-2.5">
              <div>
                <img src={green3.src} />
              </div>
              <div className="text-lime-300 text-sm font-bold leading-[21px] flex flex-col">
                <span>Tanda Tangan</span>
                <span>Dokumen</span>
              </div>
            </div>
          </div>

          <div className="self-stretch text-cyan-900 text-base font-bold leading-snug">
            Silahkan unggah tanda tangan Anda
          </div>

          {filled === false ? (
            <div className="self-stretch h-[198px] flex-col justify-start items-start gap-3 flex">
              <div className="self-stretch h-[168px] p-8 bg-slate-50 rounded-md border border-blue-500 flex-col justify-center items-center gap-2.5 flex">
                <div className="flex-col justify-start items-center gap-2 flex">
                  <div className="w-8 h-8 px-[4.67px] py-[5.33px] flex justify-center items-center">
                    <img src={uploadIcon.src} />
                  </div>
                  <div className="flex-col justify-start items-center gap-2 flex">
                    <div className="text-center text-slate-500 text-[13px] font-normal leading-[17.55px]">
                      Unggah file Anda di sini
                    </div>
                    <Button
                      secondary
                      tertiary={true}
                      className="border border-blue-500 flex justify-center items-center gap-2.5"
                      onClick={() => setFilled(true)}
                    >
                      <div className="text-center text-blue-500 text-sm font-bold leading-[18.90px]">
                        Unggah File
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="self-stretch text-slate-500 text-[13px] font-normal leading-[17.55px]">
                *Ukuran maksimum 10MB
              </div>
            </div>
          ) : (
            <div className="self-stretch flex flex-col justify-start gap-2.5">
              <div className="self-stretch h-[238px] px-8 py-6 bg-white rounded-md border border-blue-500 flex-col items-center flex">
                <div className="self-stretch flex flex-col items-center">
                  <div className="self-stretch flex justify-end">
                    <img src={closeX.src} />
                  </div>
                  <div className="w-[142px] h-[110px] flex justify-center">
                    <img src={ttd.src} />
                  </div>
                </div>
                <Button
                  secondary
                  tertiary={true}
                  className="border border-blue-500 flex justify-center items-center"
                >
                  Unggah File
                </Button>
              </div>
              <div className="self-stretch text-slate-500 text-[13px] font-normal leading-[17.55px]">
                *Ukuran maksimum 10MB
              </div>
            </div>
          )}

          <Button
            className="w-[214px] flex justify-center items-center"
            disabled={!filled}
            onClick={() => setConfirmed(true)}
          >
            Simpan
          </Button>
        </div>
      </div>
      {/* END FORM */}

      <div className="flex justify-center items-center">
        <div className="animate-bounce-slow absolute -bottom-12 font-[16px] text-[#C2CDD5] flex gap-1">
          <img src={arrowup.src} /> Anda dapat berinteraksi pada tampilan ini
        </div>
      </div>
    </div>
  );
}
