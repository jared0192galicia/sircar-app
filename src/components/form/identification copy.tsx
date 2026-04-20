import Section from "@/shared/section";
import Dropdown from "@/shared/ui/dropdown";
import Input from "@/shared/ui/input";
import { useFormStore } from "@/stores/FormState";
import { Tittle } from "./utils";

export default function Identification() {
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
      <Tittle label="Identificación" />

      <Section title="Documento">
        <Input
          label="Entrevistador"
          value={entrevistador}
          onChange={(e) => updateField('entrevistador', e)}
        />
        <Input
          label="No. de caso"
          value={numeroCaso}
          onChange={(e) => updateField('numeroCaso', e)}
        />
        <Dropdown
          label="Fecha de evaluación"
          value={fechaEvaluacion}
          onChange={(val) => updateField('fechaEvaluacion', val)}
          options={[
            { label: "Sí", value: "yes" },
            { label: "No", value: "no" },
          ]}
        />
      </Section>

      {/* PERFIL LIPIDICO */}
      <Section title="Información peronal">
        <Input
          label="Nombres"
          value={nombres}
          onChange={(e) => updateField('nombres', e)}
        />
        <Input
          label="Apellido Paterno"
          value={apellidoPaterno}
          onChange={(e) => updateField('apellidoPaterno', e)}
        />
        <Input
          label="Apellido Materno"
          value={apellidoMaterno}
          onChange={(e) => updateField('apellidoMaterno', e)}
        />
        <Input
          label="Licenciatura"
          value={licenciatura}
          onChange={(e) => updateField('licenciatura', e)}
        />
        <Input
          label="Grupo"
          value={grupo}
          onChange={(e) => updateField('grupo', e)}
        />
        <Input
          label="Sexo"
          value={sexo}
          onChange={(e) => updateField('sexo', 'F')}
        />
        <Input
          label="Edad cumplida"
          value={edadCumplidos as unknown as  string}
          onChange={(e) => updateField('edadCumplidos', parseInt(e))}
        />
      </Section>
    </div>
  );
}
