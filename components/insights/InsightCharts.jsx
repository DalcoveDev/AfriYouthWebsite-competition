const LAB_LABELS = {
  innovation: "Innovation & venture",
  research: "Research & evidence",
  policy: "Policy & governance",
  challenge: "Policy innovation",
  foresight: "Foresight & futures",
  academy: "Academy",
};

export default function InsightCharts({ labs }) {
  const depthRows = labs.map((lab) => ({
    label: LAB_LABELS[lab.id] ?? lab.name,
    value: lab.services.length,
    href: `/work#${lab.id}`,
  }));
  const deepest = Math.max(...depthRows.map((row) => row.value));

  const horizonData = [
    {
      year: "2030",
      note: "Africa's largest workforce",
      header: "By 2030, Africa will have the largest workforce in the world.",
    },
    {
      year: "2040",
      note: "Scenario horizon",
      header: "Scenarios and policy options for the mid-century peak.",
    },
    {
      year: "2050",
      note: "Vision 2050",
      header: "Four possible futures for the youth workforce in 2050.",
    },
  ];

  return (
    <div className="charts">
      <div className="chart">
        <div className="chart__head">
          <span>Depth of practice</span>
          <span>Services</span>
        </div>
        <ul className="chart__bars">
          {depthRows.map((row) => (
            <li className="chart__bar-row" key={row.href}>
              <span className="chart__bar-label">
                {row.label}
              </span>
              <span className="chart__bar">
                <span
                  className="chart__bar-fill"
                  style={{ width: `${(row.value / deepest) * 100}%` }}
                />
              </span>
              <span className="chart__bar-value">{row.value}</span>
            </li>
          ))}
        </ul>
        <p className="chart__note">
          Counted from the services and themes each lab lists in our catalogue.
        </p>
      </div>

      <div className="chart">
        <div className="chart__head">
          <span>Foresight horizon</span>
          <span>Africa 2050</span>
        </div>
        <ol className="horizon">
          {horizonData.map((item) => (
            <li className="horizon__point" key={item.year}>
              <a 
                href="#library"
                className="horizon__point-link"
                aria-label={`${item.year} ${item.note}`}
              >
                <span className="horizon__year">{item.year}</span>
                <span className="horizon__dot" aria-hidden="true" />
                <span className="horizon__note">{item.note}</span>
                <span className="horizon__sub">{item.header}</span>
              </a>
            </li>
          ))}
        </ol>
        <p className="chart__note">
          The horizons used across the Africa 2050 Futures Series.
        </p>
      </div>
    </div>
  );
} 
