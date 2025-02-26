#version 450
#extension GL_ARB_separate_shader_objects : enable

layout(set = 1, binding = 1) uniform sampler2D baseTexSampler;

layout(location = 0) in vec2 f_uv;
layout(location = 1) in vec3 f_nor;

layout(location = 0) out vec4 outColor;

void main() 
{
	outColor = vec4(texture(baseTexSampler, f_uv).rgb, 1.0);
}