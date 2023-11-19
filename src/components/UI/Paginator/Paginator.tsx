// import { useNavigate } from 'react-router-dom';
// import { useQueryClient } from 'react-query';

// import classes from './Paginator.module.css';

// import Button from '../Button/Button';

// import { UpdatePageNumberTypes } from '../../../hooks/usePagination/usePagination';
// import { useFetchDataQuery } from '../../../services/api';
// import useCurrentSearchParams from '../../../hooks/useSearchParams';

// export enum UpdatePageNumberTypes {
//   Increment = 'increment',
//   Decrement = 'decrement',
//   LastPage = 'lastPage',
//   FirstPage = 'firstPage',
// }

// function Paginator() {
//   const { getSearchParams, setSearchParams } = useCurrentSearchParams();
//   const { data } = useFetchDataQuery(getSearchParams());

//   const handleUpdateItemsOnPage = (type: string) => {
//     switch (type) {
//       case UpdatePageNumberTypes.Increment:
//         setSearchParams({
//           page: String(currentPage + 1),
//           pageSize: currentPageSize,
//         });
//         break;
//       case UpdatePageNumberTypes.Decrement:
//         setSearchParams({
//           page: String(currentPage - 1),
//           pageSize: currentPageSize,
//         });
//         break;
//       case UpdatePageNumberTypes.FirstPage:
//         setSearchParams({
//           page: firstPage,
//           pageSize: currentPageSize,
//         });
//         break;
//       case UpdatePageNumberTypes.LastPage:
//         setSearchParams({
//           page: lastPage,
//           pageSize: currentPageSize,
//         });
//         break;
//       default:
//         break;
//   };

//   const totalPages =
//     data?.totalCount && data?.pageSize
//       ? Math.ceil(data.totalCount / data.pageSize)
//       : undefined;

//   return (
//     <div className={classes.paginator}>
//       <Button
//         onClick={() => handleUpdatePageNumber(UpdatePageNumberTypes.FirstPage)}
//         disabled={data?.page === 1}
//       >
//         First
//       </Button>
//       <Button
//         onClick={() => handleUpdatePageNumber(UpdatePageNumberTypes.Decrement)}
//         disabled={data?.page === 1}
//       >
//         &lt;
//       </Button>
//       <span>
//         {data?.page} / {totalPages}
//       </span>
//       <Button
//         onClick={() => handleUpdatePageNumber(UpdatePageNumberTypes.Increment)}
//         disabled={data?.page === totalPages}
//       >
//         &gt;
//       </Button>
//       <Button
//         onClick={() => handleUpdatePageNumber(UpdatePageNumberTypes.LastPage)}
//         disabled={data?.page === totalPages}
//       >
//         Last
//       </Button>
//     </div>
//   );
// }

// export default Paginator;
