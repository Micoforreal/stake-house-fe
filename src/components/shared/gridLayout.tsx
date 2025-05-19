'use client';

import {  useEffect, } from 'react';
import { Grid } from 'react-virtualized';


// interface GridLayoutProps {
//   renderItem: ()=> JSX.Element;
//   data: any[]; 
//   columnCount: number;
//   setColumnCount?: (count: number) => void; // optional function
// }

const GridLayout = ({ renderItem, data, columnCount, setColumnCount }) => {

    useEffect(() => {
        const updateLayout = () => {
            const width = window.innerWidth;
            if (width < 640) setColumnCount(1);       // Mobile
            else if (width < 1024) setColumnCount(2); // Tablet
            else setColumnCount(3);                   // Desktop
        };

        updateLayout();
        window.addEventListener('resize', updateLayout);
        return () => window.removeEventListener('resize', updateLayout);
    }, []);

    const rowCount = Math.ceil(data.length / columnCount);





    return (
        <>
            <Grid
                cellRenderer={renderItem}
                columnCount={columnCount}
                columnWidth={400}
                autoWidth={true}
                height={500}
                rowCount={rowCount}
                rowHeight={500}
                width={columnCount * 500}
                className="scrollbar-hide  w-full"

            />
        </>);
}

export default GridLayout;