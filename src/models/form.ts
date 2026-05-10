// types/form.ts

export interface ActividadFisica {
  tipo: string;
  diasSemana: number | null;
  minutosDia: number | null;
  promedio: number | null;
  nivelIntensidad: string;
}

export interface FormState {
  entrevistador: string;
  numeroCaso: string;
  fechaEvaluacion: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  nombres: string;
  licenciatura: string;
  grupo: string;
  sexo: "M" | "F" | "";
  edadCumplidos: number | null;
  diabetesMellitus_1: string;
  diabetesMellitus_2: string;
  diabetesMellitus_3: string;
  numeroFamiliaresDiabetes: number;
  hta_1: string;
  hta_2: string;
  hta_3: string;
  numeroFamiliaresHta: number;
  enfermedadesCoronarias_1: string;
  enfermedadesCoronarias_2: string;
  enfermedadesCoronarias_3: string;
  numeroFamiliaresCoronarias: number;
  especificarEnfermedadCoronaria: string;
  neoplasias_1: string;
  neoplasias_2: string;
  neoplasias_3: string;
  especificarTipoNeoplasia: string;
  evc: string;
  sistolicaValor: number | null;
  diastolicaValor: number | null;
  deteccionOportunaHipertension: string;
  trigliceridosValor: number | null;
  colesterolValor: number | null;
  tabaquismoCigarrosDia: number | null;
  nivelTabaquismo: string;
  tiempoExposicionMeses: number | null;
  pesoKg: number | null;
  tallaMts: number | null;
  imc: number | null;
  categoriaImc: string;
  circunferenciaCinturaCm: number | null;
  riesgoCintura: string;
  circunferenciaCaderaCm: number | null;
  riesgoCadera: string;
  porcentajeGrasaCorporal: number | null;
  masaMuscularKg: number | null;
  porcentajeAguaCorporal: number | null;
  grasaVisceralValor: number | null;
  edadMetabolica: number | null;
  actividadFisica: ActividadFisica;
  requierePruebaGlucosa: string;
  cifraGlicemia: string;
  riesgoGeneral: string;
  observaciones: string;
  minutosActividadFisica: number;
  diasActividadFisica: number;
  promedioActividadFisica: number;
  nivelActividadFisica: any;
}
