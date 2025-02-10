'use client'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

export default function Sale({ }) {

  const data = [{ "date": "03/1/29", "sale": 1_000 },
    { "date": "03/2/29", "sale": 12_000 },
    { "date": "03/3/29", "sale": 1_500 },
    { "date": "03/4/29", "sale": 1_100 },
    { "date": "03/5/29", "sale": 1_700 },
    { "date": "03/6/29", "sale": 10_000 },
    { "date": "03/7/29", "sale": 2_000 },
    { "date": "03/8/29", "sale": 1_900 },
    { "date": "03/9/29", "sale": 3_000 },
    { "date": "03/10/1", "sale": 900 },
    { "date": "03/11/1", "sale": 3_900 },
]

  return (
    <ResponsiveContainer width={'100%'} height={200} >
      <AreaChart data={data}>

        <CartesianGrid strokeDasharray="5 5" />

        <XAxis tickCount={12} dataKey="date" />
        <YAxis tickCount={16} dx={-38} />

        <Tooltip labelClassName="text-D3AD7F"
        formatter={value =>
           [`${value.toLocaleString('fa-IR')}  ${ (value > 1000 && value < 999_999 ) ? 'میلیون' :'' } ${(value > 1 && value < 999 ) ? 'هزرا' :''  } ${(value > 1000_000 && value < 999_999_999 ? 'میلیارد' : '' ) 
            }  تومان` , 'میزان فروش']}
        />

        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#D3AD7F" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#D3AD7F" stopOpacity={0.2} />
          </linearGradient>
        </defs>

        <Area type="monotone" dataKey="sale" stroke="#D3AD7F" fillOpacity={1} fill="url(#colorPv)" />


      </AreaChart>
    </ResponsiveContainer>

  )
}
