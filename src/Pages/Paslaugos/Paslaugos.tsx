import { useTable } from 'react-table';
import data from '../../datasets/paslaugos.json';
import graphProducts from '../../images/paslaugos.png';

const columns = [
  {
    Header: 'Pasirinktų paslaugų kainų pokytis nuo 2017 iki 2021',
    columns: [
      {
        Header: 'Paslauga',
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

const Paslaugos = () => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <div className="max-w-7xl py-[50px] md:py-[100px] md:pr-3 mx-auto flex-col flex items-center md:items-start md:flex-row md:justify-between">
      <div className="md:mt-4 px-3 text-yellow-600 text-2xl flex-1 md:px-6 max-w-full md:max-w-[760px]">
        <p className="text-2xl font-bold">
          Pasirinktų paslaugų kainų pokytis nuo 2017 iki 2021
        </p>
        <br /> Šiame grafike vaizduojami kainų pokyčiai tam tikroms paslaugoms
        per penkerius metus nuo 2017 iki 2022 metų. Diagrama rodo, kaip kainos
        keitėsi per šiuos penkerius metus ir leidžia matyti, ar jos krito ar
        kilo. Taip pat diagrama gali parodyti, ar kainos svyravo per tam tikrus
        laikotarpius arba ar jos kito palaipsniui per visą penkerių metų
        laikotarpį. Ši diagrama yra naudinga norint matyti, kaip keičiasi
        kainos, ir galima ją panaudoti norint planuoti finansines investicijas
        arba stebėti rinkos tendencijas.
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
      <div className="md:mt-4 px-3 mt-4 text-yellow-600 text-2xl flex-1 md:px-6 max-w-[100%] md:max-w-[950px]">
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
    </div>
  );
};

export default Paslaugos;
