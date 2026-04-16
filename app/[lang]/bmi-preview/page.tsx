'use client'
import BMICard from '@/components/BMICard/BMICard'

export default function BMIPreview() {
  return (
    <div style={{ padding: '40px 20px', background: '#f8f7f4', minHeight: '100vh', display: 'flex', flexDirection: 'column', gap: 40, alignItems: 'center' }}>
      <h2 style={{ fontWeight: 700, fontSize: 18, color: '#333' }}>BMI Card Preview</h2>
      <BMICard bmi={22.5} gender="women" lifestyle="Change seeker" exercise="Light exercise" workoutFrequency="Low" />
      <BMICard bmi={27.3} gender="women" lifestyle="Change seeker" exercise="Light exercise" workoutFrequency="Low" />
      <BMICard bmi={33.1} gender="women" lifestyle="Change seeker" exercise="Light exercise" workoutFrequency="Low" />
      <BMICard bmi={22.5} gender="men"   lifestyle="Active seeker" exercise="Moderate"      workoutFrequency="Medium" />
    </div>
  )
}
