'use client'
import { Area, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

export default function Grow() {


    const data = [{ "date": "1403/1/", "current": 1_000, "prev": 1_000 },
    { "date": "1403/2/", "current": 12_000, "prev": 1_000 },
    { "date": "1403/3/", "current": 1_500, "prev": 12_000 },
    { "date": "1403/4/", "current": 1_100, "prev": 1_500 },
    { "date": "1403/5/", "current": 1_700, "prev": 1_100 },
    { "date": "1403/6/", "current": 10_000, "prev": 1_700 },
    { "date": "1403/7/", "current": 2_000, "prev": 10_000 },
    { "date": "1403/8/", "current": 1_900, "prev": 2_000 },
    { "date": "1403/9/", "current": 3_000, "prev": 1_900 },
    { "date": "1403/10/1", "current": 900, "prev": 3_000 },
    { "date": "1403/11/1", "current": 1_000, "prev": 900 },
    ]

    return (
        <ResponsiveContainer width={'100%'} height={200} >
            <LineChart data={data}>

                <CartesianGrid strokeDasharray="5 5" />

                <XAxis tickCount={12} dataKey="date" />
                <YAxis tickCount={16} dx={-38} />

                <Tooltip content={({ payload }) => {
                    if (!payload || payload.length === 0) return null;


                    return (
                        <div style={{ background: "#fff", padding: "10px", border: "1px solid #ccc" }}>
                          <p className="text-D3AD7F mb-3">میزان فروش : </p>
                          {payload.map((entry, index) => (
                            <p key={index} style={{ color: entry.color }}>
                              {entry.name === "current"
                                ? `${entry?.value.toLocaleString('fa-IR')} تومان`
                                : `${entry?.value.toLocaleString('fa-IR')} تومان (ماه قبل)`}
                            </p>
                          ))}
                        </div>
                      );


                }}
                    // formatter={value => [`${value.toLocaleString('fa-IR')} تومان`, "میزان فروش"]}
                />

                <Line type="monotone" dataKey="current" stroke="#D3AD7F" />
                <Line type="monotone" dataKey="prev" stroke="#999" />


            </LineChart>
        </ResponsiveContainer>
    )
}
