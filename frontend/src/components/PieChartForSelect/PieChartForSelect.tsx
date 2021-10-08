import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import styled from "styled-components";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const COLORS = [
	"#0088FE",
	"#00C49F",
	"#FFBB28",
	"#FF8042",
	"#F5C94C",
	"#D47E53",
	"#EB679E",
	"#8D53D4",
	"#609CF7",
	"#033BD6",
	"#60F558",
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
	cx,
	cy,
	midAngle,
	innerRadius,
	outerRadius,
	percent,
	index,
}: any) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
	const x = cx + radius * Math.cos(-midAngle * RADIAN);
	const y = cy + radius * Math.sin(-midAngle * RADIAN);

	return (
		<text
			x={x}
			y={y}
			fill="white"
			textAnchor={x > cx ? "start" : "end"}
			dominantBaseline="central"
		>
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	);
};

const renderLegend = (props: any) => {
	const { payload } = props;

	return (
		<LegendWrapper>
			{payload.map((entry: { value: string; color: string }) => (
				<li key={`item-${entry.value}`}>
					<div
						style={{
							backgroundColor: entry.color,
							display: "inline-block",
							width: 20,
							height: 10,
							marginRight: 5,
							marginLeft: 10,
						}}
					>
						{" "}
					</div>
					{/* <span>{index}. </span> */}
					<img
						src={`${IMAGE_BASE_URL}${entry.value}`}
						alt={`selectImg-${entry.value}`}
						width="100"
						height="75"
					/>
				</li>
			))}
		</LegendWrapper>
	);
};

interface SelectQuestion {
	qType: string;
	title: string;
	options: string[];
	responses: number[];
}

interface PieChartForSelectProps {
	data: SelectQuestion;
}

const IMAGE_BASE_URL = "http://j5a501.p.ssafy.io:8080/images/";

export function PieChartForSelect({ data }: PieChartForSelectProps) {
	const chartdata = data.options.map(entry => ({
		name: entry,
		value: 0,
	}));

	data.responses.forEach(entry => {
		if (chartdata[entry] && chartdata[entry].value) {
			chartdata[entry].value += 1;
		}
	});

	const CustomTooltip = ({ active, payload }: any) => {
		if (active && payload && payload.length) {
			return (
				<TooltipWrapper>
					이미지 {data.options.findIndex(item => item === payload[0].name)} :{" "}
					{payload[0].value}
				</TooltipWrapper>
			);
		}

		return null;
	};

	return (
		<div>
			<Title>{data.title}</Title>
			<Paragraph>응답 {data.responses.length}개</Paragraph>
			<ChartWrapper>
				<PieChart width={500} height={350}>
					{data.qType === "select" ? (
						<Tooltip />
					) : (
						<Tooltip content={<CustomTooltip />} />
					)}

					<Legend
						align="right"
						verticalAlign="top"
						layout="vertical"
						height={36}
						content={data.qType === "selectImg" ? renderLegend : undefined}
					/>
					<Pie
						data={chartdata}
						cx={150}
						cy={150}
						labelLine={false}
						label={renderCustomizedLabel}
						outerRadius={150}
						fill="#8884d8"
						dataKey="value"
					>
						{chartdata.map((entry, index) => (
							<Cell
								key={`cell-${entry.name}`}
								fill={COLORS[index % COLORS.length]}
							/>
						))}
					</Pie>
				</PieChart>
			</ChartWrapper>
		</div>
	);
}

const ChartWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const TooltipWrapper = styled.div`
	border: solid 1px gray;
	background-color: #eeeeee;
	color: black;
	padding: 1em;
	font-weight: 500;
	font-size: 1em;
`;

const LegendWrapper = styled.ul`
	display: flex;
	flex-direction: column;
	height: 350px;
	flex-wrap: wrap;
`;
