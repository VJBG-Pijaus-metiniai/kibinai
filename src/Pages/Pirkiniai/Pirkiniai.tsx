import { useTable } from 'react-table';
import data from '../../datasets/pirkiniai.json';
import graphProducts from '../../images/pirkiniu_krepselis.png';

const columns = [
  {
    Header: 'Pasirinktų prekių kainų pokytis nuo 2017 iki 2021',
    columns: [
      {
        Header: 'Pirkinys',
        accessor: 'pirkinys',
      },
      {
        Header: '2017',
        accessor: '2017',
      },
      {
        Header: '2018',
        accessor: '2018',
      },
      {
        Header: '2019',
        accessor: '2019',
      },
      {
        Header: '2020',
        accessor: '2020',
      },
      {
        Header: '2021',
        accessor: '2021',
      },
    ],
  },
];

const Pirkiniai = () => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <div className="max-w-7xl py-[25px] md:py-[150px] md:pr-3 mx-auto flex-col flex items-center md:items-start md:flex-row md:justify-between">
      <div className="md:mt-4 mb-4 md:mb-0 px-3 text-yellow-600 text-2xl flex-1 md:px-6 max-w-[100%] md:max-w-[760px]">
        <table className="mb-5" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <img
          className="w-full"
          src={graphProducts}
          alt="Pirkiniu kainu pokytis grafikas"
        />
      </div>
      <div className="md:mt-4 px-3 text-yellow-600 text-2xl flex-1 md:px-6 max-w-[760px]">
        <p className="text-2xl font-bold">
          Pasirinktų prekių kainų pokytis nuo 2017 iki 2021
        </p>
        <br /> Ši diagrama yra galinga priemonė, skirta stebėti prekių kainų
        pokyčius per tam tikrą laiko tarpą. Ji gali padėti verslo savininkams ar
        rinkos analitikams suprasti, kaip kintantys ekonominiai rodikliai ar
        žaliavų kainos gali paveikti prekių kainas, ir padėti priimti sprendimus
        dėl produktų gamybos ar platinimo strategijų. Be to, ši diagrama gali
        būti naudinga vartotojams, norintiems stebėti kainų pokyčius ir
        pasirinkti geriausias pirkimo galimybes. Ji taip pat gali padėti
        apskaičiuoti vidutinės kainos tendencijas ir numatyti, kaip jos gali
        kisti ateityje, leisti prognozuoti pelningumą ir planuoti finansinius
        išteklius.
        <br />
        <br />
        Šaltinis:
        <br />
        <a
          className="text-blue-500"
          target="_blank"
          href="https://osp.stat.gov.lt/services-portlet/pub-edition-file?id=40740"
        >
          https://osp.stat.gov.lt/services-portlet/pub-edition-file?id=40740
        </a>{' '}
        Lietuva skaičiais 154psl.
      </div>
    </div>
  );
};

export default Pirkiniai;
