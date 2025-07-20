'use client'

import { useEffect, useState } from 'react'

export default function GraphBackground() {
  const [nodes, setNodes] = useState<Array<{ id: number; x: number; y: number; color: string; size: number; type: string }>>([])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    // Generate unique graph nodes with different types using seeded random
    const generateNodes = () => {
      const nodeCount = 20
      const newNodes = []
      const nodeTypes = ['circle', 'square', 'diamond', 'hexagon']
      const colors = ['green', 'blue', 'purple', 'pink', 'yellow', 'cyan']
      
      // Use a seeded random function for consistent values
      const seededRandom = (seed: number) => {
        const x = Math.sin(seed) * 10000
        return x - Math.floor(x)
      }
      
      for (let i = 0; i < nodeCount; i++) {
        newNodes.push({
          id: i,
          x: seededRandom(i * 1.5) * 100,
          y: seededRandom(i * 2.3) * 100,
          color: colors[i % colors.length],
          size: seededRandom(i * 3.1) * 6 + 4, // 4-10px
          type: nodeTypes[i % nodeTypes.length]
        })
      }
      
      setNodes(newNodes)
    }

    generateNodes()
    
    // Mouse tracking for interactive effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', generateNodes)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', generateNodes)
    }
  }, [])

  const getNodeShape = (type: string, size: number, color: string, seed: number) => {
    const seededRandom = (seed: number) => {
      const x = Math.sin(seed) * 10000
      return x - Math.floor(x)
    }
    
    const baseStyle = {
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: `var(--${color}-500)`,
      boxShadow: `0 0 15px var(--${color}-500)`,
      animationDelay: `${seededRandom(seed * 7.3) * 3}s`
    }

    switch (type) {
      case 'square':
        return { ...baseStyle, borderRadius: '2px', transform: 'rotate(45deg)' }
      case 'diamond':
        return { ...baseStyle, borderRadius: '0', transform: 'rotate(45deg)' }
      case 'hexagon':
        return { 
          ...baseStyle, 
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          borderRadius: '0'
        }
      default:
        return { ...baseStyle, borderRadius: '50%' }
    }
  }

  // Don't render anything on server side
  if (!isClient) {
    return null
  }

  return (
    <div className="graph-pattern">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => {
          const seededRandom = (seed: number) => {
            const x = Math.sin(seed) * 10000
            return x - Math.floor(x)
          }
          
          return (
            <div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${seededRandom(i * 1.1) * 100}%`,
                top: `${seededRandom(i * 1.7) * 100}%`,
                animation: `float ${seededRandom(i * 2.3) * 10 + 10}s linear infinite`,
                animationDelay: `${seededRandom(i * 3.1) * 10}s`
              }}
            />
          )
        })}
      </div>

      {/* Main graph nodes */}
      {nodes.map((node) => (
        <div
          key={node.id}
          className="graph-node"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            ...getNodeShape(node.type, node.size, node.color, node.id)
          }}
        />
      ))}
      
      {/* Dynamic connections based on mouse position */}
      {nodes.slice(0, 12).map((node, index) => {
        const nextNode = nodes[(index + 1) % nodes.length]
        if (!nextNode) return null
        
        const angle = Math.atan2(nextNode.y - node.y, nextNode.x - node.x)
        const distance = Math.sqrt(Math.pow(nextNode.x - node.x, 2) + Math.pow(nextNode.y - node.y, 2))
        
        // Mouse proximity effect
        const mouseDistance = Math.sqrt(
          Math.pow(mousePos.x - (node.x * window.innerWidth / 100), 2) +
          Math.pow(mousePos.y - (node.y * window.innerHeight / 100), 2)
        )
        const proximity = Math.max(0, 1 - mouseDistance / 300)
        
        return (
          <div
            key={`connection-${node.id}`}
            className="absolute bg-gradient-to-r from-green-400/60 to-blue-400/60"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              width: `${distance}%`,
              height: `${2 + proximity * 3}px`,
              transform: `rotate(${angle}rad)`,
              transformOrigin: '0 0',
              opacity: 0.7 + proximity * 0.3,
              boxShadow: `0 0 ${5 + proximity * 10}px rgba(34, 197, 94, ${0.3 + proximity * 0.4})`
            }}
          />
        )
      })}

      {/* Mouse trail effect */}
      <div 
        className="absolute w-4 h-4 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-sm opacity-50"
        style={{
          left: mousePos.x - 8,
          top: mousePos.y - 8,
          transition: 'all 0.1s ease-out'
        }}
      />
    </div>
  )
} 