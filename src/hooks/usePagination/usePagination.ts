// import { SetURLSearchParams } from 'react-router-dom';
// import { ApiResponse } from '../../services/apiTypes';
// import useCurrentSearchParams from '../useSearchParams';

// export enum UpdatePageNumberTypes {
//   Increment = 'increment',
//   Decrement = 'decrement',
//   LastPage = 'lastPage',
//   FirstPage = 'firstPage',
// }

// export default function usePagination() {
//   const { getSearchParams, setSearchParams } = useCurrentSearchParams();

//   const handleUpdatePageNumber = (type: UpdatePageNumberTypes): void => {
//     const currentPage = Number(data.page);
//     const currentPageSize = data.pageSize.toString();
//     const firstPage = '1';
//     const lastPage = String(Math.ceil(data.totalCount / data.pageSize));

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
//     }
//   };

//   const handleUpdateItemsOnPage = (value: string) => {
//     const firstPage = '1';
//     if (data) {
//       setSearchParams({
//         page: firstPage,
//         pageSize: value,
//       });
//     }
//   };

//   return {
//     handleUpdatePageNumber,
//     handleUpdateItemsOnPage,
//   };
// }
