import { ActividadFisica, FormState } from "@/models/form";
import { create } from "zustand";

interface FormStore extends FormState {
  updateField: <K extends keyof FormState>(
    field: K,
    value: FormState[K],
  ) => void;
  updateActividadFisica: (data: Partial<ActividadFisica>) => void;
  resetForm: () => void;
}

const initialState: FormState = {
  entrevistador: "",
  numeroCaso: "",
  fechaEvaluacion: "",
  apellidoPaterno: "",
  apellidoMaterno: "",
  nombres: "",
  licenciatura: "",
  grupo: "",
  sexo: "",
  edadCumplidos: null,
  diabetesMellitus_1: "",
  diabetesMellitus_2: "",
  diabetesMellitus_3: "",
  numeroFamiliaresDiabetes: 0,
  hta_1: "",
  hta_2: "",
  hta_3: "",
  numeroFamiliaresHta: 0,
  enfermedadesCoronarias_1: "",
  enfermedadesCoronarias_2: "",
  enfermedadesCoronarias_3: "",
  numeroFamiliaresCoronarias: 0,
  especificarEnfermedadCoronaria: "",
  neoplasias_1: "",
  neoplasias_2: "",
  neoplasias_3: "",
  especificarTipoNeoplasia: "",
  evc: "",
  sistolicaValor: null,
  diastolicaValor: null,
  deteccionOportunaHipertension: "",
  trigliceridosValor: null,
  colesterolValor: null,
  tabaquismoCigarrosDia: null,
  nivelTabaquismo: "",
  tiempoExposicionMeses: null,
  pesoKg: null,
  tallaMts: null,
  imc: null,
  categoriaImc: "",
  circunferenciaCinturaCm: null,
  riesgoCintura: "",
  circunferenciaCaderaCm: null,
  riesgoCadera: "",
  porcentajeGrasaCorporal: null,
  masaMuscularKg: null,
  porcentajeAguaCorporal: null,
  grasaVisceralValor: null,
  edadMetabolica: null,
  actividadFisica: {
    tipo: "",
    diasSemana: null,
    minutosDia: null,
    promedio: null,
    nivelIntensidad: "",
  },
  requierePruebaGlucosa: "",
  cifraGlicemia: "",
  riesgoGeneral: "",
  observaciones: "",
  minutosActividadFisica: 0,
  diasActividadFisica: 0,
  promedioActividadFisica: 0,
  nivelActividadFisica: 0,
};

export const useFormStore = create<FormStore>((set) => ({
  ...initialState,

  updateField: (field, value) => set((state) => ({ ...state, [field]: value })),

  updateActividadFisica: (data) =>
    set((state) => ({
      actividadFisica: { ...state.actividadFisica, ...data },
    })),

  resetForm: () => set(initialState),
}));
