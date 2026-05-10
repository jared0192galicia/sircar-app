import Section from "@/shared/section";
import Dropdown from "@/shared/ui/dropdown";
import Input from "@/shared/ui/input";
import { useFormStore } from "@/stores/FormState";
import { Tittle } from "./utils";

export default function CardiovascularRisk() {
  const {
    nombres,
    sexo,
    fechaEvaluacion,
    numeroCaso,
    licenciatura,
    apellidoMaterno,
    apellidoPaterno,
    edadCumplidos,
    grupo,
    updateField,
    entrevistador,
  } = useFormStore();
  return (
    <div className="px-8 pt-8">
      <Tittle label="Factores de riesgo cardiovascular" />

      <Section title="Presión Arterial">
        <Input
          label="Presión Sistólica (mmHg)"
          value={entrevistador}
          onChange={(e) => updateField('entrevistador', e)}
        />
        <Input
          label="Presión Diastólica (mmHg)"
          value={numeroCaso}
          onChange={(e) => updateField('numeroCaso', e)}
        />
        <Dropdown
          label="Diagnóstico presión"
          value={fechaEvaluacion}
          onChange={(val) => updateField('fechaEvaluacion', val)}
          options={[
            { label: "Sí", value: "yes" },
            { label: "No", value: "no" },
          ]}
        />
        
      </Section>

      {/* PERFIL LIPIDICO */}
      <Section title="Perfil Lipídico">
        <Input
          label="Triglicéridos (mg/dl)"
          value={nombres}
          onChange={(e) => updateField('nombres', e)}
        />
        <Input
          label="Colesterol Total (mg/dl)"
          value={apellidoPaterno}
          onChange={(e) => updateField('apellidoPaterno', e)}
        />
      </Section>

      {/* PERFIL LIPIDICO */}
      <Section title="Tabaquismo">
        <Input
          label="Número de cigarros al día"
          value={nombres}
          onChange={(e) => updateField('nombres', e)}
        />
        <Dropdown
          label="Nivel de tabaquismo"
          value={fechaEvaluacion}
          onChange={(val) => updateField('fechaEvaluacion', val)}
          options={[
            { label: "Sí", value: "yes" },
            { label: "No", value: "no" },
          ]}
        />
        <Input
          label="Tiempo de exposición (meses)"
          value={apellidoPaterno}
          onChange={(e) => updateField('apellidoPaterno', e)}
        />
      </Section>
    </div>
  );
}
