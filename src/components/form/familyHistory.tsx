import Section from "@/shared/section";
import Dropdown from "@/shared/ui/dropdown";
import Input from "@/shared/ui/input";
import { useFormStore } from "@/stores/FormState";
import { Tittle } from "./utils";

export default function FamilyHistory() {
  const {
    updateField,
    diabetesMellitus_1,
    diabetesMellitus_2,
    diabetesMellitus_3,
    numeroFamiliaresDiabetes,

    hta_1,
    hta_2,
    hta_3,
    numeroFamiliaresHta,

    enfermedadesCoronarias_1,
    enfermedadesCoronarias_2,
    enfermedadesCoronarias_3,
    especificarEnfermedadCoronaria,
    numeroFamiliaresCoronarias,

    neoplasias_1,
    neoplasias_2,
    neoplasias_3,
    especificarTipoNeoplasia,
    evc,
  } = useFormStore();
  return (
    <div className="px-8 pt-8">
      <Tittle label="Antecedentes Heredofamiliares" />

      {/* DIABETES MELLITUS */}
      <Section title="Diabetes Mellitus">
        <Input
          label="Familiar 1"
          value={diabetesMellitus_1}
          onChange={(e) => updateField("diabetesMellitus_1", e)}
        />
        <Input
          label="Familiar 2"
          value={diabetesMellitus_2}
          onChange={(e) => updateField("diabetesMellitus_2", e)}
        />
        <Input
          label="Familiar 3"
          value={diabetesMellitus_3}
          onChange={(e) => updateField("diabetesMellitus_3", e)}
        />
        <Input
          label="Total de familiares"
          // type="number"
          value={numeroFamiliaresDiabetes}
          onChange={(e) => updateField("numeroFamiliaresDiabetes", parseInt(e))}
        />
      </Section>

      {/* HIPERTENSIÓN ARTERIAL (HTA) */}
      <Section title="Hipertensión Arterial">
        <Input
          label="Familiar 1"
          value={hta_1}
          onChange={(e) => updateField("hta_1", e)}
        />
        <Input
          label="Familiar 2"
          value={hta_2}
          onChange={(e) => updateField("hta_2", e)}
        />
        <Input
          label="Familiar 3"
          value={hta_3}
          onChange={(e) => updateField("hta_3", e)}
        />
        <Input
          label="Total de familiares"
          value={numeroFamiliaresHta}
          onChange={(e) => updateField("numeroFamiliaresHta", parseInt(e))}
        />
      </Section>

      {/* ENFERMEDADES CORONARIAS */}
      <Section title="Enfermedades Coronarias">
        <Input
          label="Familiar 1"
          value={enfermedadesCoronarias_1}
          onChange={(e) => updateField("enfermedadesCoronarias_1", e)}
        />
        <Input
          label="Familiar 2"
          value={enfermedadesCoronarias_2}
          onChange={(e) => updateField("enfermedadesCoronarias_2", e)}
        />
        <Input
          label="Familiar 3"
          value={enfermedadesCoronarias_3}
          onChange={(e) => updateField("enfermedadesCoronarias_3", e)}
        />
        <Input
          label="Tipo de enfermedad"
          value={especificarEnfermedadCoronaria}
          onChange={(e) => updateField("especificarEnfermedadCoronaria", e)}
        />
        <Input
          label="Total de familiares"
          // type="number"
          value={numeroFamiliaresCoronarias}
          onChange={(e) =>
            updateField("numeroFamiliaresCoronarias", parseInt(e))
          }
        />
      </Section>

      {/* NEOPLASIAS */}
      <Section title="Neoplasias">
        <Input
          label="Familiar 1"
          value={neoplasias_1}
          onChange={(e) => updateField("neoplasias_1", e)}
        />
        <Input
          label="Familiar 2"
          value={neoplasias_2}
          onChange={(e) => updateField("neoplasias_2", e)}
        />
        <Input
          label="Familiar 3"
          value={neoplasias_3}
          onChange={(e) => updateField("neoplasias_3", e)}
        />
        <Input
          label="Tipo de Neoplasia"
          value={especificarTipoNeoplasia}
          onChange={(e) => updateField("especificarTipoNeoplasia", e)}
        />
      </Section>

      {/* EVC */}
      <Section title="Otros">
        <Dropdown
          label="¿Antecedentes de EVC?"
          value={evc}
          onChange={(val) => updateField("evc", val)}
          options={[
            { label: "Sí", value: "si" },
            { label: "No", value: "no" },
          ]}
        />
      </Section>
    </div>
  );
}
