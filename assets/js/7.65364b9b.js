(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{240:function(t,s,a){t.exports=a.p+"assets/img/corruption.675b1eca.png"},241:function(t,s,a){t.exports=a.p+"assets/img/black_triangles.df338b97.png"},242:function(t,s,a){t.exports=a.p+"assets/img/render_doc_output.e0c8b298.png"},243:function(t,s,a){t.exports=a.p+"assets/img/results.7918efc1.png"},272:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"compute-example-tangents-and-bitangents"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#compute-example-tangents-and-bitangents"}},[t._v("#")]),t._v(" Compute Example: Tangents and Bitangents")]),t._v(" "),n("p",[t._v("This proved more difficult than I anticipated. The first problem I encountered was some vertex data corruption due to the shader reading my vertex data incorrectly. I was using my "),n("code",[t._v("ModelVertex")]),t._v(" struct I used in the "),n("RouterLink",{attrs:{to:"/intermediate/tutorial11-normals/"}},[t._v("normal mapping tutorial")]),t._v(".")],1),t._v(" "),n("div",{staticClass:"language-rust extra-class"},[n("pre",{pre:!0,attrs:{class:"language-rust"}},[n("code",[n("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[repr(C)]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[derive(Copy, Clone, Debug, bytemuck::Pod, bytemuck::Zeroable)]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[t._v("ModelVertex")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    position"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("f32")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    tex_coords"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("f32")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    normal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("f32")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    tangent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("f32")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    bitangent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("f32")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("This structure works perfectly fine when used as a vertex buffer. Using it as a storage buffer proved less convenient. My previous code used a GLSL struct similar to my "),n("code",[t._v("ModelVertex")]),t._v(".")]),t._v(" "),n("div",{staticClass:"language-glsl extra-class"},[n("pre",{pre:!0,attrs:{class:"language-glsl"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ModelVertex")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("vec3")]),t._v(" position"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("vec2")]),t._v(" tex_coords"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("vec3")]),t._v(" normal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("vec3")]),t._v(" tangent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("vec3")]),t._v(" bitangent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("At first glance, this seems just fine, but OpenGL experts would likely see a problem with the structure. Our fields aren't aligned properly to support the "),n("code",[t._v("std430")]),t._v(" alignment that storage buffers require.. I won't get into detail but you can check out the "),n("a",{attrs:{href:"/showcase/alignment"}},[t._v("alignment showcase")]),t._v(" if you want to know more. To summarize, the "),n("code",[t._v("vec2")]),t._v(" for the "),n("code",[t._v("tex_coords")]),t._v(" was messing up the byte alignment, corrupting the vertex data resulting in the following:")]),t._v(" "),n("p",[n("img",{attrs:{src:a(240),alt:"./corruption.png"}})]),t._v(" "),n("p",[t._v("I could have fixed this by adding a padding field after "),n("code",[t._v("tex_coords")]),t._v(" on the Rust side, but that would require modifying the "),n("code",[t._v("VertexBufferDescriptor")]),t._v(". I ended up solving this problem by using the components of the vectors directly and resulted with a struct like this:")]),t._v(" "),n("div",{staticClass:"language-glsl extra-class"},[n("pre",{pre:!0,attrs:{class:"language-glsl"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ModelVertex")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" z"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" uv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" uw"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" nx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" ny"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" nz"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" tx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" ty"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" tz"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" bx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" by"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" bz"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("Since "),n("code",[t._v("std430")]),t._v(" will use the alignment of the largest element of the struct, using all floats means the struct will be aligned to 4 bytes. This is alignment matches what "),n("code",[t._v("ModelVertex")]),t._v(" uses in Rust. This was kind of a pain to work with, but it fixed the corruption issue.")]),t._v(" "),n("p",[t._v("The second problem required me to rethink how I was computing the tangent and bitangent. The previous algorithm I was using only computed the tangent and bitangent for each triangle and set all the vertices in that triangle to use the same tangent and bitangent. While this is fine in a single threaded context, the code breaks down when trying to compute the triangles in parallel. The reason is that multiple triangles can share the same vertices. This means that when we go to save the resulting tangents, we inevitably end up trying to write to the same vertex from multiple different threads which is a big no no. You can see the issue with this method below:")]),t._v(" "),n("p",[n("img",{attrs:{src:a(241),alt:"./black_triangles.png"}})]),t._v(" "),n("p",[t._v("Those black triangles were the result of multiple GPU threads trying to modify the same vertices. Looking at the data in Render Doc I could see that the tangents and bitangents were garbage numbers such as "),n("code",[t._v("NaN")]),t._v(".")]),t._v(" "),n("p",[n("img",{attrs:{src:a(242),alt:"./render_doc_output.png"}})]),t._v(" "),n("p",[t._v("While on the CPU we could introduce a synchronization primitive such as a "),n("code",[t._v("Mutex")]),t._v(" to fix this issue, AFAIK there isn't really such a thing on the GPU. Instead I decided to swap my code to work with each vertex individually. There are some hurdles with that, but those will be easier to explain in code. Let's start with the "),n("code",[t._v("main")]),t._v(" function.")]),t._v(" "),n("div",{staticClass:"language-glsl extra-class"},[n("pre",{pre:!0,attrs:{class:"language-glsl"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("uint")]),t._v(" vertexIndex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gl_GlobalInvocationID"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ModelVertex result "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("calcTangentBitangent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vertexIndex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    dstVertices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("vertexIndex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("We use the "),n("code",[t._v("gl_GlobalInvocationID.x")]),t._v(" to get the index of the vertex we want to compute the tangents for. I opted to put the actual calculation into it's own method. Let's take a look at that.")]),t._v(" "),n("div",{staticClass:"language-glsl extra-class"},[n("pre",{pre:!0,attrs:{class:"language-glsl"}},[n("code",[t._v("ModelVertex "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("calcTangentBitangent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("uint")]),t._v(" vertexIndex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ModelVertex v "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" srcVertices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("vertexIndex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("vec3")]),t._v(" tangent "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("vec3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("vec3")]),t._v(" bitangent "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("vec3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("uint")]),t._v(" trianglesIncluded "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Find the triangles that use v")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  * Loop over every triangle (i + 3)")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("uint")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" numIndices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("uint")]),t._v(" index0 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" indices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("uint")]),t._v(" index1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" indices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("uint")]),t._v(" index2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" indices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Only perform the calculation if one of the indices")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// matches our vertexIndex")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index0 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" vertexIndex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" index1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" vertexIndex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" index2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" vertexIndex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            ModelVertex v0 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" srcVertices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            ModelVertex v1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" srcVertices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            ModelVertex v2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" srcVertices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("vec3")]),t._v(" pos0 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPos")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("vec3")]),t._v(" pos1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPos")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("vec3")]),t._v(" pos2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPos")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("vec2")]),t._v(" uv0 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUV")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("vec2")]),t._v(" uv1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUV")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("vec2")]),t._v(" uv2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUV")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("vec3")]),t._v(" delta_pos1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pos1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" pos0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("vec3")]),t._v(" delta_pos2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pos2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" pos0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("vec2")]),t._v(" delta_uv1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" uv1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" uv0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("vec2")]),t._v(" delta_uv2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" uv2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" uv0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" r "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("delta_uv1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" delta_uv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" delta_uv1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" delta_uv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            tangent "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("delta_pos1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" delta_uv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" delta_pos2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" delta_uv1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" r"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            bitangent "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("delta_pos2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" delta_uv1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" delta_pos1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" delta_uv2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" r"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n            trianglesIncluded "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        \n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Average the tangent and bitangents")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("trianglesIncluded "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        tangent "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/=")]),t._v(" trianglesIncluded"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        bitangent "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/=")]),t._v(" trianglesIncluded"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        tangent "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("normalize")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tangent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        bitangent "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("normalize")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bitangent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Save the results")]),t._v("\n    v"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tx "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tangent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    v"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ty "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tangent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    v"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tz "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tangent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("z"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    v"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bx "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" bitangent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    v"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("by "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" bitangent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    v"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bz "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" bitangent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("z"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" v"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"possible-improvements"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#possible-improvements"}},[t._v("#")]),t._v(" Possible Improvements")]),t._v(" "),n("p",[t._v("Looping over every triangle for every vertex is likely raising some red flags for some of you. In a single threaded context, this algorithm would end up being O(N*M). As we are utilizing the high number of threads availble to our GPU, this is less of an issue, but it still means our GPU is burning more cycles than it needs to.")]),t._v(" "),n("p",[t._v("One way I came up with to possibly improve performance is to store the index of each triangle in a hash map like structure with the vertex index as keys. Here's some pseudo code:")]),t._v(" "),n("div",{staticClass:"language-rust extra-class"},[n("pre",{pre:!0,attrs:{class:"language-rust"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" t "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("indices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    triangle_map"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("indices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("t "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    triangle_map"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("indices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("t "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    triangle_map"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("indices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("t "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("We'd then need to flatten this structure to pass it to the GPU. We'd also need a second array to index the first.")]),t._v(" "),n("div",{staticClass:"language-rust extra-class"},[n("pre",{pre:!0,attrs:{class:"language-rust"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_v"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" t_list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" triangle_map"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("iter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("enumerate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    triangle_map_indices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TriangleMapIndex")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n        start"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        len"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" t_list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    flat_triangle_map"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("extend")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t_list"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("I ultimately decided against this method as it was more complicated, and I haven't had time to benchmark it to see if it's faster that the simple method.")]),t._v(" "),n("h2",{attrs:{id:"results"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#results"}},[t._v("#")]),t._v(" Results")]),t._v(" "),n("p",[t._v("The tangents and bitangents are now getting calculated correctly and on the GPU!")]),t._v(" "),n("p",[n("img",{attrs:{src:a(243),alt:"./results.png"}})]),t._v(" "),n("AutoGithubLink")],1)}),[],!1,null,null,null);s.default=e.exports}}]);