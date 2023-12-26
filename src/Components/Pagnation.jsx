import React, { useMemo } from 'react'
import { UseUserContext } from '../Context/UserContext'
import { Pagination } from 'react-bootstrap'



export default function PagnationTable ({ data = [], items = 2 })
{
    const pages = useMemo(() =>
    {
        const Pages = [];
        let count = 1
        if (data?.length > items)
        {

            while (data?.length)
            {
                Pages.push(<Pagination.Item>{count}</Pagination.Item>)
                count++
                console.log(count,data.length);
                data.length=data.length>=items?data.length-items:0;

            }
        }
        return Pages;
    },[data,items])
  try {
      if (!Array.isArray(data)) throw new TypeError('Array Type is Applicable');

      if (Number.isNaN(items) || !Number.isInteger(items))
          throw new TypeError('Integer Type is Applicable')
  } catch (error) {
      console.error(error);
  }



    return pages?.length > 0 && <Pagination>
        {pages}

  </Pagination>
}
