type Props = {
  name: string;
  value: string;
};
export const WeatherDetailsItem = ({ name, value }: Props) => {
  return (
    <>
      <p className="weather-details-item">
        <span className="name">{name}: </span>
        <span className="value">{value}</span>
      </p>
      <style jsx>{`
        .weather-details-item {
          display: flex;
          flex: 1;
          margin-bottom: 4px;
        }
        .name {
          display: flex;
          flex-basis: 50%;
          font-size: 14px;
        }
        .value {
          display: flex;
          flex-basis: 50%;
        }
      `}</style>
    </>
  );
};
