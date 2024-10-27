import { TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useGauge } from "use-gauge";

const RewardGuage = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < value) {
      const intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 40);

      return () => clearInterval(intervalId);
    }
  }, [count, value]);

  const START_ANGLE = 60;
  const END_ANGLE = 300;
  const gauge = useGauge({
    domain: [0, 100],
    startAngle: START_ANGLE,
    endAngle: END_ANGLE,
    numTicks: 0,
    diameter: 180,
  });

  const needle = gauge.getNeedleProps({
    value: count,
    baseRadius: 7,
    tipRadius: 1,
  });

  return (
    <Stack direction={"column"} alignItems={"center"}>
      <div className="p-4">
        <svg className="w-full overflow-visible p-2" {...gauge.getSVGProps()}>
          <g id="arcs">
            <path
              {...gauge.getArcProps({
                offset: 30,
                startAngle: START_ANGLE,
                endAngle: END_ANGLE,
              })}
              fill="none"
              stroke="#FECDCA"
              strokeLinecap="round"
              strokeWidth={25}
            />
            <path
              {...gauge.getArcProps({
                offset: 30,
                startAngle: START_ANGLE,
                endAngle: gauge.valueToAngle(count),
              })}
              fill="none"
              stroke="#D13751"
              strokeLinecap="round"
              strokeWidth={24}
            />
          </g>
          <g id="ticks">
            {gauge.ticks.map((angle) => {
              const asValue = gauge.angleToValue(angle);
              const showText =
                asValue === 20 || asValue === 80 || asValue === 50;

              return (
                <React.Fragment key={`tick-group-${angle}`}>
                  <line
                    className="stroke-gray-300"
                    strokeWidth={2}
                    {...gauge.getTickProps({
                      angle,
                      length: showText ? 12 : 6,
                    })}
                  />
                  {showText && (
                    <text
                      className="text-sm fill-gray-400 font-medium"
                      {...gauge.getLabelProps({ angle, offset: 20 })}
                    >
                      {asValue}
                    </text>
                  )}
                </React.Fragment>
              );
            })}
          </g>
          <g id="needle">
            <circle fill={"#FDA29B"} {...needle.base} r={11} />
            <circle fill="#F83D4B" {...needle.base} />
            <circle fill="#F83D4B" {...needle.tip} />
            <polyline fill="#F83D4B" points={needle.points} />
            <circle fill={"#FDA29B"} {...needle.base} r={4} />
          </g>
        </svg>
      </div>
      <Typography
        className="my_reward"
        fontSize={"2em"}
        color={"#D13851"}
        variant={"h5"}
        fontWeight={"600"}
      >{`$${count}.00`}</Typography>
      <Typography variant="caption" color={"#667085"}>
        My Reward
      </Typography>
    </Stack>
  );
};

export default RewardGuage;
