import Block from '~/UI/Block'
import SkillIcons from './SkillIcons'

export default function SkillSection({ delay = 0 }: { delay?: number }) {
  return (
    <Block section="skills" delay={delay}>
      <div className="space-y-4">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-white">Technical Skills</h2>
          <p className="text-gray-400 text-sm">
            My core stack and DevOps tools for building, deploying, and scaling modern applications
          </p>
        </div>
        <SkillIcons />
      </div>
    </Block>
  )
} 