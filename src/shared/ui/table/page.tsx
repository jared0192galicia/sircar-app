import React, { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";

interface ColumnProps {
  field: string;
  header: string;
  body?: (rowData: any) => React.ReactNode;
  width?: string;
}

export const Column = (_: ColumnProps) => null;

interface DataTableProps {
  value: any[];
  children: React.ReactElement<ColumnProps> | React.ReactElement<ColumnProps>[];
  scrollHeight?: string;
  minWidth?: string; // Agregado para controlar el scroll horizontal
}

export const DataTable = ({
  value,
  children,
  scrollHeight = "500px",
  minWidth = "800px",
}: DataTableProps) => {
  const parentRef = useRef<HTMLDivElement>(null);

  // Extraemos los props de los hijos <Column />
  const columns = React.Children.map(children, (child) => {
    if (React.isValidElement<ColumnProps>(child)) {
      return child.props;
    }
    return null;
  }).filter(Boolean) as ColumnProps[];

  // Definimos una altura fija para el header para sincronizarlo con la virtualización
  const headerHeight = 60;

  // Configuración de la virtualización
  const rowVirtualizer = useVirtualizer({
    count: value.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 60, // Altura estimada de la fila en px
    overscan: 5, // Filas extra para evitar parpadeos
    paddingStart: headerHeight, // <-- CORRECCIÓN 1: Desplaza el inicio de los datos para no quedar bajo el header
  });

  return (
    <div
      ref={parentRef}
      className="overflow-auto border border-app-gray-500/20 rounded-xl bg-app-blue-800/75"
      style={{ height: scrollHeight }}
    >
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          width: "100%",
          minWidth: minWidth,
          position: "relative",
        }}
      >
        <div
          className="sticky top-0 z-20 flex w-full bg-app-blue-800/30 backdrop-blur-sm"
          style={{ height: `${headerHeight}px` }}
        >
          {columns.map((col, i) => (
            <div
              key={i}
              className="px-4 text-slate-400 text-sm font-semibold flex items-center"
              style={{
                width: col.width || `${100 / columns.length}%`,
                flex: col.width ? "none" : 1,
              }}
            >
              {col.header}
            </div>
          ))}
          <div className="absolute bottom-0 left-0 right-0 border-b border-app-gray-500/20 pointer-events-none" />
        </div>

        {/* Cuerpo Virtualizado */}
        <div className="w-full">
          {rowVirtualizer.getVirtualItems().map((virtualRow) => {
            const rowData = value[virtualRow.index];
            return (
              <div
                key={virtualRow.key}
                className="absolute left-0 top-0 flex w-full hover:bg-slate-800/20 transition-colors items-center group"
                style={{
                  height: "60px",
                  transform: `translateY(${virtualRow.start}px)`,
                }}
              >
                {columns.map((col, i) => (
                  <div
                    key={i}
                    className="p-4 text-slate-300 text-sm truncate"
                    style={{
                      width: col.width || `${100 / columns.length}%`,
                      flex: col.width ? "none" : 1,
                    }}
                  >
                    {col.body ? col.body(rowData) : rowData[col.field]}
                  </div>
                ))}

                {/* Línea divisoria de la fila con padding */}
                <div className="absolute bottom-0 left-4 right-4 border-b border-app-gray-500/20 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
